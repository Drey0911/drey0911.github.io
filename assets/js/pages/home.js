import { initTheme } from "../core/theme.js";
import { initLanguage } from "../core/i18n.js";
import { observeReveal } from "../core/reveal.js";
import { initNavbar } from "../modules/navbar.js";
import { initHero } from "../modules/hero.js";
import { initAbout } from "../modules/about.js";
import { initSkills } from "../modules/skills.js";
import { initProjects } from "../modules/projects.js";
import { initContact } from "../modules/contact.js";
import { renderSocials } from "../modules/socials.js";

const boot = () => {
  initTheme();
  initLanguage();
  renderSocials();
  initNavbar();
  initHero();
  initAbout();
  initSkills();
  initProjects();
  initContact();
  observeReveal();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
