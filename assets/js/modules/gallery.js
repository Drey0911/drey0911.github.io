import { qs, clear, el } from "../core/dom.js";

export const createGallery = ({ images = [], onZoom } = {}) => {
  const stageImage = qs("[data-gallery-image]");
  const thumbs = qs("[data-gallery-thumbs]");
  const counter = qs("[data-gallery-counter]");
  const prev = qs("[data-gallery-prev]");
  const next = qs("[data-gallery-next]");

  if (!stageImage || !images.length) return;

  let index = 0;

  const paint = () => {
    stageImage.style.opacity = "0";
    setTimeout(() => {
      stageImage.src = images[index];
      stageImage.style.opacity = "1";
    }, 160);

    if (counter) counter.textContent = `${index + 1} / ${images.length}`;

    [...thumbs.children].forEach((thumb, position) => {
      thumb.classList.toggle("is-active", position === index);
    });
  };

  const go = (position) => {
    index = (position + images.length) % images.length;
    paint();
  };

  clear(thumbs);
  images.forEach((src, position) => {
    const thumb = el(
      "button",
      {
        className: `gallery__thumb${position === 0 ? " is-active" : ""}`,
        attrs: { type: "button", "aria-label": `${position + 1}` }
      },
      [el("img", { attrs: { src, alt: "", loading: "lazy" } })]
    );

    thumb.addEventListener("click", () => go(position));
    thumbs.append(thumb);
  });

  prev?.addEventListener("click", () => go(index - 1));
  next?.addEventListener("click", () => go(index + 1));

  stageImage.addEventListener("click", () => onZoom?.(images[index]));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") go(index - 1);
    if (event.key === "ArrowRight") go(index + 1);
  });

  let startX = 0;
  const stage = stageImage.parentElement;

  stage.addEventListener(
    "touchstart",
    (event) => {
      startX = event.touches[0].clientX;
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchend",
    (event) => {
      const delta = event.changedTouches[0].clientX - startX;
      if (Math.abs(delta) < 45) return;
      go(delta > 0 ? index - 1 : index + 1);
    },
    { passive: true }
  );

  stageImage.style.transition = "opacity 0.25s ease";
  paint();
};

export const createLightbox = () => {
  const box = qs("[data-lightbox]");
  const image = qs("[data-lightbox-image]");
  if (!box || !image) return { open: () => {} };

  const close = () => {
    box.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  box.addEventListener("click", (event) => {
    if (event.target === box || event.target.closest("[data-lightbox-close]")) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  return {
    open: (src) => {
      image.src = src;
      box.classList.add("is-open");
      document.body.classList.add("no-scroll");
    }
  };
};
