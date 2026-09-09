import { qsa } from "./dom.js";
import { read, write } from "./storage.js";
import { es } from "../i18n/es.js";
import { en } from "../i18n/en.js";
import { site } from "../data/site.data.js";

const KEY = "lang";
const DICTS = { es, en };
const SUPPORTED = Object.keys(DICTS);

let current = "es";

const resolve = (source, path) =>
  path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), source);

export const getLang = () => current;

export const t = (key) => {
  const value = resolve(DICTS[current], key);
  return value === undefined ? key : value;
};

export const tx = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return value[current] ?? value.es ?? "";
  return value;
};

export const siteValue = (path) => tx(resolve(site, path));

const applyStatic = (scope = document) => {
  qsa("[data-i18n]", scope).forEach((node) => {
    const key = node.dataset.i18n;
    const attr = node.dataset.i18nAttr;
    const value = t(key);
    if (attr) node.setAttribute(attr, value);
    else node.textContent = value;
  });

  qsa("[data-site]", scope).forEach((node) => {
    const value = siteValue(node.dataset.site);
    const attr = node.dataset.siteAttr;
    if (attr) node.setAttribute(attr, value);
    else node.textContent = value;
  });

  const title = document.querySelector("[data-title-key]");
  if (title) document.title = t(title.dataset.titleKey);

  document.documentElement.lang = current;
};

export const setLang = (lang) => {
  current = SUPPORTED.includes(lang) ? lang : "es";
  write(KEY, current);

  qsa("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === current);
    button.setAttribute("aria-pressed", String(button.dataset.lang === current));
  });

  applyStatic();
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
};

export const initLanguage = () => {
  const stored = read(KEY);

  qsa("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });

  setLang(stored || "es");
};

export const onLangChange = (handler) => {
  document.addEventListener("langchange", handler);
  return handler;
};
