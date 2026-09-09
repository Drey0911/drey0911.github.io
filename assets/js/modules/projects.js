import { qs, clear, el } from "../core/dom.js";
import { t, tx, onLangChange } from "../core/i18n.js";
import { observeReveal } from "../core/reveal.js";
import { projectImage, projectUrl } from "../core/paths.js";
import { projects, projectTypes } from "../data/projects.data.js";
import { getTechList } from "../data/tech.data.js";

let activeFilter = "all";

const countOf = (type) =>
  type === "all" ? projects.length : projects.filter((project) => project.type === type).length;

const renderFilters = () => {
  const container = qs("[data-project-filters]");
  if (!container) return;

  clear(container);

  projectTypes.forEach((type) => {
    const total = countOf(type.id);
    if (!total && type.id !== "all") return;

    const button = el(
      "button",
      {
        className: `filter-btn${type.id === activeFilter ? " is-active" : ""}`,
        attrs: { type: "button" },
        dataset: { filter: type.id }
      },
      [
        el("i", { attrs: { class: type.icon, "aria-hidden": "true" } }),
        el("span", { text: t(`projects.${type.id}`) }),
        el("span", { className: "filter-btn__count", text: String(total) })
      ]
    );

    container.append(button);
  });
};

const repoLinks = (project) => {
  const wrap = el("div", { className: "project-card__repos" });
  const { repo, repoFront, deploy } = project.links;

  if (repo) {
    wrap.append(
      el("a", {
        attrs: { href: repo, target: "_blank", rel: "noopener", title: t("projects.repo"), "aria-label": t("projects.repo") },
        html: '<i class="fab fa-github" aria-hidden="true"></i>'
      })
    );
  }

  if (repoFront) {
    wrap.append(
      el("a", {
        attrs: { href: repoFront, target: "_blank", rel: "noopener", title: t("projects.repoFront"), "aria-label": t("projects.repoFront") },
        html: '<i class="fas fa-code-branch" aria-hidden="true"></i>'
      })
    );
  }

  if (deploy) {
    wrap.append(
      el("a", {
        attrs: { href: deploy, target: "_blank", rel: "noopener", title: t("projects.deploy"), "aria-label": t("projects.deploy") },
        html: '<i class="fas fa-rocket" aria-hidden="true"></i>'
      })
    );
  }

  return wrap;
};

const projectCard = (project) => {
  const stack = el("div", { className: "project-card__stack" });
  getTechList(project.preview).forEach((item) => {
    stack.append(
      el("img", { attrs: { src: item.logo, alt: item.name, title: item.name, loading: "lazy" } })
    );
  });

  const card = el(
    "article",
    {
      className: "project-card",
      attrs: { "data-reveal": "", tabindex: "0", role: "link" },
      dataset: { project: project.id }
    },
    [
      el("div", { className: "project-card__media" }, [
        el("img", {
          attrs: {
            src: projectImage(project.folder, project.cover),
            alt: tx(project.title),
            loading: "lazy"
          }
        }),
        el("span", { className: "project-card__type", text: t(`projects.${project.type}`) }),
        el("span", { className: "project-card__year", text: project.year })
      ]),
      el("div", { className: "project-card__body" }, [
        el("h3", { className: "project-card__title", text: tx(project.title) }),
        el("p", { className: "project-card__text", text: tx(project.summary) }),
        stack,
        el("div", { className: "project-card__foot" }, [
          el("span", { className: "project-card__link" }, [
            el("span", { text: t("projects.viewMore") }),
            el("i", { attrs: { class: "fas fa-arrow-right", "aria-hidden": "true" } })
          ]),
          repoLinks(project)
        ])
      ])
    ]
  );

  return card;
};

const renderGrid = () => {
  const grid = qs("[data-projects-grid]");
  if (!grid) return;

  clear(grid);

  const list =
    activeFilter === "all" ? projects : projects.filter((project) => project.type === activeFilter);

  if (!list.length) {
    grid.append(el("p", { className: "projects__empty", text: t("projects.empty") }));
    return;
  }

  list.forEach((project, index) => {
    const card = projectCard(project);
    card.style.setProperty("--reveal-delay", `${index * 70}ms`);
    grid.append(card);
  });

  observeReveal(grid);
};

const bindEvents = () => {
  const filters = qs("[data-project-filters]");
  const grid = qs("[data-projects-grid]");

  filters?.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderFilters();
    renderGrid();
  });

  const open = (id) => {
    window.location.href = projectUrl(id);
  };

  grid?.addEventListener("click", (event) => {
    const card = event.target.closest(".project-card");
    if (!card || event.target.closest("a")) return;
    open(card.dataset.project);
  });

  grid?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".project-card");
    if (!card) return;
    event.preventDefault();
    open(card.dataset.project);
  });
};

export const initProjects = () => {
  const render = () => {
    renderFilters();
    renderGrid();
  };

  render();
  bindEvents();
  onLangChange(render);
};
