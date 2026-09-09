import { qsa } from "./dom.js";
import { read, write } from "./storage.js";

const KEY = "theme";
const root = document.documentElement;

export const getTheme = () => root.getAttribute("data-theme") || "dark";

export const setTheme = (theme) => {
  root.setAttribute("data-theme", theme === "light" ? "light" : "dark");
  write(KEY, theme);
  document.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
};

export const initTheme = () => {
  setTheme(read(KEY) || "dark");

  qsa("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
  });
};
