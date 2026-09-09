import { qs, clear, el, isMobile } from "../core/dom.js";
import { t, tx, onLangChange } from "../core/i18n.js";
import { observeReveal } from "../core/reveal.js";
import { skillGroups, marqueeKeys } from "../data/skills.data.js";
import { getTech } from "../data/tech.data.js";

let tip = null;

const getTip = () => {
  if (!tip) {
    tip = el("div", { className: "tip", attrs: { role: "tooltip" } });
    document.body.append(tip);
  }
  return tip;
};

const hideTip = () => {
  getTip().classList.remove("is-visible");
  document.querySelectorAll(".skill-tag.is-active").forEach((node) => node.classList.remove("is-active"));
};

const showTip = (anchor, name, detail) => {
  const node = getTip();
  node.innerHTML = "";
  node.append(el("strong", { text: name }), el("span", { text: detail }));
  node.classList.add("is-visible");

  const rect = anchor.getBoundingClientRect();
  const box = node.getBoundingClientRect();
  const margin = 10;

  let left = rect.left + rect.width / 2 - box.width / 2;
  left = Math.min(Math.max(left, margin), window.innerWidth - box.width - margin);

  let top = rect.top - box.height - margin;
  if (top < margin) top = rect.bottom + margin;

  node.style.left = `${left}px`;
  node.style.top = `${top}px`;
};

/* MARQUEE */
const renderMarquee = () => {
  const track = qs("[data-marquee]");
  if (!track) return;

  clear(track);

  const build = (key) => {
    const item = getTech(key);
    return el("div", { className: "marquee__item" }, [
      el("img", { attrs: { src: item.logo, alt: item.name, loading: "lazy" } }),
      el("span", { text: item.name })
    ]);
  };

  [...marqueeKeys, ...marqueeKeys].forEach((key) => track.append(build(key)));
  track.style.setProperty("--marquee-duration", `${marqueeKeys.length * 3}s`);
};

/* TARJETAS */
const renderGroups = () => {
  const grid = qs("[data-skill-groups]");
  if (!grid) return;

  clear(grid);

  skillGroups.forEach((group, index) => {
    const tags = el("div", { className: "skill-card__tags" });

    group.items.forEach((item) => {
      const info = getTech(item.key);
      const tag = el(
        "button",
        {
          className: "skill-tag",
          attrs: { type: "button" },
          dataset: { detail: tx(item.detail), name: info.name }
        },
        [
          el("img", { attrs: { src: info.logo, alt: "", loading: "lazy" } }),
          el("span", { text: info.name })
        ]
      );
      tags.append(tag);
    });

    const card = el(
      "article",
      { className: "skill-card", attrs: { "data-reveal": "" } },
      [
        el("div", { className: "skill-card__head" }, [
          el("div", {}, [
            el("span", { className: "skill-card__kicker", text: tx(group.kicker) }),
            el("h3", { className: "skill-card__title", text: group.title }),
            el("p", { className: "skill-card__subtitle", text: tx(group.subtitle) })
          ]),
          el("span", { className: "skill-card__icon" }, [
            el("i", { attrs: { class: group.icon, "aria-hidden": "true" } })
          ])
        ]),
        tags,
        el("div", { className: "skill-card__hint" }, [
          el("i", { attrs: { class: "fas fa-circle-info", "aria-hidden": "true" } }),
          el("span", { text: t("skills.hint") })
        ])
      ]
    );

    card.style.setProperty("--reveal-delay", `${index * 70}ms`);
    grid.append(card);
  });

  observeReveal(grid);
};

const bindTips = () => {
  const grid = qs("[data-skill-groups]");
  if (!grid) return;

  grid.addEventListener("pointerover", (event) => {
    const tag = event.target.closest(".skill-tag");
    if (!tag || isMobile()) return;
    showTip(tag, tag.dataset.name, tag.dataset.detail);
  });

  grid.addEventListener("pointerout", (event) => {
    if (isMobile()) return;
    if (event.target.closest(".skill-tag")) hideTip();
  });

  grid.addEventListener("click", (event) => {
    const tag = event.target.closest(".skill-tag");
    if (!tag) return;

    const active = tag.classList.contains("is-active");
    hideTip();
    if (active) return;

    tag.classList.add("is-active");
    showTip(tag, tag.dataset.name, tag.dataset.detail);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".skill-tag")) hideTip();
  });

  window.addEventListener("scroll", hideTip, { passive: true });
  window.addEventListener("resize", hideTip);
};

export const initSkills = () => {
  const render = () => {
    renderMarquee();
    renderGroups();
  };

  render();
  bindTips();
  onLangChange(render);
};
