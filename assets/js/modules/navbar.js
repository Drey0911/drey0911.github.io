import { qs, qsa } from "../core/dom.js";

export const initNavbar = () => {
  const navbar = qs("[data-navbar]");
  const toggle = qs("[data-nav-toggle]");
  const links = qs("[data-nav-links]");
  const topBtn = qs("[data-to-top]");
  const anchors = qsa("[data-nav-links] a[href^='#']");
  const sections = anchors
    .map((anchor) => qs(anchor.getAttribute("href")))
    .filter(Boolean);

  const closeMenu = () => {
    toggle?.classList.remove("is-open");
    links?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  anchors.forEach((anchor) => anchor.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (!links?.classList.contains("is-open")) return;
    if (event.target.closest("[data-nav-links]") || event.target.closest("[data-nav-toggle]")) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const setActive = () => {
    const offset = window.scrollY + 140;
    let activeId = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= offset) activeId = section.id;
    });

    anchors.forEach((anchor) => {
      anchor.classList.toggle("is-active", anchor.getAttribute("href") === `#${activeId}`);
    });
  };

  const onScroll = () => {
    navbar?.classList.toggle("is-stuck", window.scrollY > 24);
    topBtn?.classList.toggle("is-visible", window.scrollY > 600);
    if (sections.length) setActive();
  };

  topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
};
