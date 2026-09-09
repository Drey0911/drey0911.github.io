import { qs, clear, el } from "../core/dom.js";
import { initTheme } from "../core/theme.js";
import { initLanguage, t, tx, onLangChange } from "../core/i18n.js";
import { observeReveal } from "../core/reveal.js";
import { projectImage, projectUrl, asset } from "../core/paths.js";
import { projects, findProject } from "../data/projects.data.js";
import { getTechList } from "../data/tech.data.js";
import { createGallery, createLightbox } from "../modules/gallery.js";
import { renderSocials } from "../modules/socials.js";

const currentId = new URLSearchParams(window.location.search).get("id");
const project = findProject(currentId);

const renderHero = () => {
  document.title = `${tx(project.title)} | Andrey Mantilla`;

  qs("[data-project-type]").textContent = t(`projects.${project.type}`);
  qs("[data-project-title]").textContent = tx(project.title);
  qs("[data-project-desc]").textContent = tx(project.description);
  qs("[data-crumb-title]").textContent = tx(project.title);

  const meta = qs("[data-project-meta]");
  clear(meta);

  [
    { icon: "fas fa-calendar", value: project.year },
    { icon: "fas fa-user-gear", value: tx(project.role) },
    { icon: "fas fa-layer-group", value: `${project.stack.length} ${t("detail.labelStack").toLowerCase()}` }
  ].forEach((item) => {
    meta.append(
      el("span", { className: "chip chip--brand" }, [
        el("i", { attrs: { class: item.icon, "aria-hidden": "true" } }),
        el("span", { text: item.value })
      ])
    );
  });
};

const renderActions = () => {
  const container = qs("[data-project-actions]");
  clear(container);

  const { repo, repoFront, mockup, deploy } = project.links;
  const actions = [];

  if (repo) {
    actions.push({
      href: repo,
      icon: "fab fa-github",
      label: repoFront ? t("projects.repoBack") : t("projects.repo"),
      style: "btn--primary"
    });
  }

  if (repoFront) {
    actions.push({
      href: repoFront,
      icon: "fas fa-code-branch",
      label: t("projects.repoFront"),
      style: "btn--ghost"
    });
  }

  if (mockup) {
    actions.push({
      href: projectImage(project.folder, mockup),
      icon: "fas fa-image",
      label: t("projects.mockup"),
      style: "btn--ghost"
    });
  }

  if (deploy) {
    actions.push({ href: deploy, icon: "fas fa-rocket", label: t("projects.deploy"), style: "btn--outline" });
  }

  actions.forEach((action) => {
    container.append(
      el(
        "a",
        {
          className: `btn ${action.style}`,
          attrs: { href: action.href, target: "_blank", rel: "noopener" }
        },
        [
          el("i", { attrs: { class: action.icon, "aria-hidden": "true" } }),
          el("span", { text: action.label })
        ]
      )
    );
  });
};

const renderDetails = () => {
  const features = qs("[data-features]");
  clear(features);
  project.features.forEach((feature) => features.append(el("li", { text: tx(feature) })));

  qs("[data-tech-copy]").textContent = tx(project.stackNote);

  const grid = qs("[data-tech-grid]");
  clear(grid);
  getTechList(project.stack).forEach((item) => {
    grid.append(
      el("span", { className: "chip" }, [
        el("img", { attrs: { src: item.logo, alt: "", loading: "lazy" } }),
        el("span", { text: item.name })
      ])
    );
  });

  const sheet = qs("[data-project-sheet]");
  clear(sheet);

  [
    { label: t("detail.labelType"), value: t(`projects.${project.type}`) },
    { label: t("detail.labelYear"), value: project.year },
    { label: t("detail.labelRole"), value: tx(project.role) },
    { label: t("detail.labelStack"), value: String(project.stack.length) }
  ].forEach((row) => {
    sheet.append(
      el("li", {}, [
        el("span", { className: "data-list__key", text: row.label }),
        el("span", { className: "data-list__val", text: row.value })
      ])
    );
  });
};

const renderSwitch = () => {
  const container = qs("[data-project-switch]");
  clear(container);

  const index = projects.findIndex((item) => item.id === project.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const card = (target, labelKey, modifier, icon) =>
    el(
      "a",
      { className: `switch-card ${modifier}`, attrs: { href: projectUrl(target.id) } },
      [
        el("span", { className: "switch-card__label" }, [
          el("i", { attrs: { class: icon, "aria-hidden": "true" } }),
          el("span", { text: ` ${t(labelKey)}` })
        ]),
        el("span", { className: "switch-card__title", text: tx(target.title) })
      ]
    );

  container.append(
    card(prev, "detail.prev", "switch-card--prev", "fas fa-arrow-left"),
    card(next, "detail.next", "switch-card--next", "fas fa-arrow-right")
  );
};

const boot = () => {
  initTheme();

  if (!project) {
    window.location.replace(asset("index.html"));
    return;
  }

  initLanguage();
  renderSocials();

  const lightbox = createLightbox();
  createGallery({
    images: project.images.map((file) => projectImage(project.folder, file)),
    onZoom: lightbox.open
  });

  const render = () => {
    renderHero();
    renderActions();
    renderDetails();
    renderSwitch();
  };

  render();
  onLangChange(render);
  observeReveal();

  const navbar = qs("[data-navbar]");
  window.addEventListener(
    "scroll",
    () => navbar?.classList.toggle("is-stuck", window.scrollY > 24),
    { passive: true }
  );

  qs("[data-to-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener(
    "scroll",
    () => qs("[data-to-top]")?.classList.toggle("is-visible", window.scrollY > 500),
    { passive: true }
  );
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
