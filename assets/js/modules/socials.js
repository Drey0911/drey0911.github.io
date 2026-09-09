import { qsa, clear, el } from "../core/dom.js";
import { site } from "../data/site.data.js";

export const renderSocials = () => {
  qsa("[data-socials]").forEach((container) => {
    clear(container);

    site.socials.forEach((social) => {
      container.append(
        el(
          "a",
          {
            className: "social-link",
            attrs: {
              href: social.url,
              target: social.url.startsWith("http") ? "_blank" : null,
              rel: "noopener",
              title: social.label,
              "aria-label": social.label
            }
          },
          [el("i", { attrs: { class: social.icon, "aria-hidden": "true" } })]
        )
      );
    });
  });
};
