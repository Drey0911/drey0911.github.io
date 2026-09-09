import { qs, clear, el } from "../core/dom.js";
import { t, tx, onLangChange } from "../core/i18n.js";
import { site } from "../data/site.data.js";

const openWhatsapp = (message) => {
  const url = `https://wa.me/${site.contact.phoneRaw}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
};

const renderOptions = () => {
  const container = qs("[data-wa-options]");
  if (!container) return;

  clear(container);

  site.whatsappMessages.forEach((option) => {
    const button = el(
      "button",
      {
        className: "wa-btn",
        attrs: { type: "button" },
        dataset: { wa: option.id, custom: option.custom ? "true" : "false" }
      },
      [
        el("i", { attrs: { class: option.icon, "aria-hidden": "true" } }),
        el("span", {}, [
          el("span", { className: "wa-btn__title", text: tx(option.title) }),
          el("span", { className: "wa-btn__text", text: tx(option.text) })
        ]),
        el("i", { className: "wa-btn__arrow fas fa-arrow-right", attrs: { "aria-hidden": "true" } })
      ]
    );

    container.append(button);
  });
};

const bindModal = () => {
  const modal = qs("[data-modal]");
  const field = qs("[data-modal-field]");
  if (!modal || !field) return { open: () => {} };

  const close = () => {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  const open = () => {
    field.value = "";
    field.placeholder = t("contact.modalPlaceholder");
    modal.classList.add("is-open");
    document.body.classList.add("no-scroll");
    setTimeout(() => field.focus(), 120);
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-modal-close]")) close();
  });

  qs("[data-modal-send]")?.addEventListener("click", () => {
    const message = field.value.trim();
    if (!message) {
      field.focus();
      return;
    }
    openWhatsapp(message);
    close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  return { open };
};

export const initContact = () => {
  renderOptions();
  const modal = bindModal();

  qs("[data-wa-options]")?.addEventListener("click", (event) => {
    const button = event.target.closest(".wa-btn");
    if (!button) return;

    const option = site.whatsappMessages.find((item) => item.id === button.dataset.wa);
    if (!option) return;

    if (option.custom) modal.open();
    else openWhatsapp(tx(option.message));
  });

  onLangChange(renderOptions);
};
