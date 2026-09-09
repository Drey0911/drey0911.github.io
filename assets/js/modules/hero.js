import { qs, clear, el, prefersReducedMotion } from "../core/dom.js";
import { tx, getLang, onLangChange } from "../core/i18n.js";
import { site } from "../data/site.data.js";
import { observeReveal } from "../core/reveal.js";

let typingTimer = null;

/* EFECTO ESCRITURA */
const startTyping = () => {
  const target = qs("[data-typed]");
  if (!target) return;

  const phrases = site.typed.map((phrase) => tx(phrase));
  clearTimeout(typingTimer);

  if (prefersReducedMotion()) {
    target.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const step = () => {
    const phrase = phrases[phraseIndex % phrases.length];
    charIndex += deleting ? -1 : 1;
    target.textContent = phrase.slice(0, charIndex);

    let delay = deleting ? 45 : 95;

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex += 1;
      delay = 380;
    }

    typingTimer = setTimeout(step, delay);
  };

  typingTimer = setTimeout(step, 600);
};

/* BADGE 3D */
const initBadgeTilt = () => {
  const stage = qs("[data-badge-stage]");
  const badge = qs("[data-badge]");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (!stage || !badge || prefersReducedMotion() || !finePointer) return;

  const maxTilt = 14;

  const move = (event) => {
    const rect = stage.getBoundingClientRect();
    const point = event.touches ? event.touches[0] : event;
    const px = (point.clientX - rect.left) / rect.width - 0.5;
    const py = (point.clientY - rect.top) / rect.height - 0.5;

    badge.style.setProperty("--badge-ry", `${px * maxTilt * 2}deg`);
    badge.style.setProperty("--badge-rx", `${-py * maxTilt}deg`);
  };

  const reset = () => {
    stage.classList.remove("is-grabbed");
    badge.style.setProperty("--badge-ry", "0deg");
    badge.style.setProperty("--badge-rx", "0deg");
  };

  stage.addEventListener("pointerenter", () => stage.classList.add("is-grabbed"));
  stage.addEventListener("pointermove", move);
  stage.addEventListener("pointerleave", reset);
  stage.addEventListener("blur", reset);
};

/* BADGE DATOS */
const renderBadgeMeta = () => {
  const list = qs("[data-badge-meta]");
  if (!list) return;

  clear(list);

  site.badge.rows.forEach((row) => {
    const value = row.status
      ? el("span", { className: "badge__value badge__status", text: tx(row.value) })
      : el("span", { className: "badge__value", text: tx(row.value) });

    list.append(
      el("div", { className: "badge__row" }, [
        el("span", { className: "badge__label", text: tx(row.label) }),
        value
      ])
    );
  });
};

/* ACCESOS RAPIDOS */
const renderQuickAccess = () => {
  const grid = qs("[data-quick-access]");
  if (!grid) return;

  clear(grid);

  site.quickAccess.forEach((item, index) => {
    const card = el(
      "a",
      {
        className: "quick-card",
        attrs: { href: item.target, "data-reveal": "" },
        dataset: {}
      },
      [
        el("span", { className: "quick-card__index", text: item.index }),
        el("span", { className: "quick-card__title" }, [
          el("i", { attrs: { class: item.icon, "aria-hidden": "true" } }),
          el("span", { text: tx(item.title) })
        ]),
        el("span", { className: "quick-card__text", text: tx(item.text) }),
        el("i", { className: "quick-card__arrow fas fa-arrow-right", attrs: { "aria-hidden": "true" } })
      ]
    );

    card.style.setProperty("--reveal-delay", `${index * 90}ms`);
    grid.append(card);
  });

  observeReveal(grid);
};

/* ESTADISTICAS */
const renderStats = () => {
  const row = qs("[data-stats]");
  if (!row) return;

  clear(row);

  site.stats.forEach((stat) => {
    row.append(
      el("div", { className: "stat" }, [
        el("span", { className: "stat__value", text: stat.value }),
        el("span", { className: "stat__label", text: tx(stat.label) })
      ])
    );
  });
};

export const initHero = () => {
  const render = () => {
    renderBadgeMeta();
    renderQuickAccess();
    renderStats();
    startTyping();
    document.documentElement.dataset.lang = getLang();
  };

  render();
  initBadgeTilt();
  onLangChange(render);
};
