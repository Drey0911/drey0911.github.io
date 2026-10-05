import { el } from "./dom.js";
import { site } from "../data/site.data.js";

const icon = (className) => el("i", { attrs: { class: className, "aria-hidden": "true" } });

export const siteHost = () => site.badge.footer.es || "drey.is-a.dev";

/* BARRA TERMINAL LINUX */
export const termBar = (location, meta = "bash", { user = true } = {}) =>
  el("div", { className: "term__bar", attrs: { "aria-hidden": "true" } }, [
    el("span", { className: "term__dots" }, [el("i"), el("i"), el("i")]),
    el("span", { className: "term__path" }, [
      el(
        "span",
        {},
        user
          ? [
              el("span", { className: "term__user", text: "andrey@dev" }),
              document.createTextNode(":"),
              el("span", { className: "term__loc", text: location }),
              document.createTextNode("$")
            ]
          : [el("span", { className: "term__loc", text: location })]
      ),
      el("span", { className: "term__cursor" })
    ]),
    el("span", { className: "term__meta", text: meta })
  ]);

/* CABECERA VENTANA NAVEGADOR */
export const windowChrome = ({ favicon, title, path }) => [
  el("div", { className: "win__tabs", attrs: { "aria-hidden": "true" } }, [
    el("div", { className: "win__tab" }, [
      el("i", { className: `win__favicon ${favicon}` }),
      el("span", { className: "win__title", text: title }),
      el("span", { className: "win__close-tab" }, [icon("fas fa-xmark")])
    ]),
    el("div", { className: "win__ctrl" }, [
      el("span", {}, [icon("fas fa-minus")]),
      el("span", {}, [icon("far fa-square")]),
      el("span", { className: "win__x" }, [icon("fas fa-xmark")])
    ])
  ]),
  el("div", { className: "win__nav", attrs: { "aria-hidden": "true" } }, [
    el("span", { className: "win__btn" }, [icon("fas fa-arrow-left")]),
    el("span", { className: "win__btn win__btn--off" }, [icon("fas fa-arrow-right")]),
    el("span", { className: "win__btn win__btn--reload" }, [icon("fas fa-rotate-right")]),
    el("span", { className: "win__url" }, [
      icon("fas fa-lock"),
      el("span", { className: "win__url-text" }, [
        el("span", { className: "win__host", text: siteHost() }),
        el("span", { className: "win__path", text: path })
      ]),
      el("i", { className: "win__star far fa-star", attrs: { "aria-hidden": "true" } })
    ]),
    el("span", { className: "win__progress" })
  ])
];
