import { qs, clear, el } from "../core/dom.js";
import { tx, onLangChange } from "../core/i18n.js";
import { observeReveal } from "../core/reveal.js";
import { profileFacts, qualities, education, work } from "../data/experience.data.js";

const renderFacts = () => {
  const list = qs("[data-profile-facts]");
  if (!list) return;

  clear(list);

  profileFacts.forEach((fact) => {
    list.append(
      el("li", {}, [
        el("span", { className: "data-list__key", text: tx(fact.label) }),
        el("span", { className: "data-list__val", text: tx(fact.value) })
      ])
    );
  });
};

const renderQualities = () => {
  const list = qs("[data-qualities]");
  if (!list) return;

  clear(list);
  qualities.forEach((item) => list.append(el("li", { text: tx(item) })));
};

const timelineItem = (entry, icon, { showOrg = true, showDescription = true } = {}) => {
  const topChildren = [el("span", { className: "timeline__period", text: tx(entry.period) })];
  if (entry.level) {
    topChildren.push(el("span", { className: "timeline__tag", text: tx(entry.level) }));
  }

  const body = [
    el("div", { className: "timeline__top" }, topChildren),
    el("h4", { className: "timeline__title", text: tx(entry.title) })
  ];

  if (showOrg && entry.org) {
    body.push(
      el("p", { className: "timeline__org" }, [
        el("i", { attrs: { class: icon, "aria-hidden": "true" } }),
        el("span", { text: tx(entry.org) })
      ])
    );
  }

  if (showDescription && entry.description) {
    body.push(el("p", { className: "timeline__desc", text: tx(entry.description) }));
  }

  return el(
    "article",
    {
      className: `timeline__item${entry.current ? " timeline__item--current" : ""}`,
      attrs: { "data-reveal": "" }
    },
    body
  );
};

const renderTimeline = (selector, entries, icon, options = {}) => {
  const container = qs(selector);
  if (!container) return;

  clear(container);
  entries.forEach((entry, index) => {
    const item = timelineItem(entry, icon, options);
    item.style.setProperty("--reveal-delay", `${index * 80}ms`);
    container.append(item);
  });

  observeReveal(container);
};

export const initAbout = () => {
  const render = () => {
    renderFacts();
    renderQualities();
    renderTimeline("[data-education]", education, "fas fa-graduation-cap", {
      showOrg: false,
      showDescription: false
    });
    renderTimeline("[data-work]", work, "fas fa-building");
  };

  render();
  onLangChange(render);
};
