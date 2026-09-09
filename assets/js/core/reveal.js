import { qsa, prefersReducedMotion } from "./dom.js";

let observer = null;

const show = (node) => node.classList.add("is-visible");

export const observeReveal = (scope = document) => {
  const nodes = qsa("[data-reveal]:not(.is-visible)", scope);
  if (!nodes.length) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    nodes.forEach(show);
    return;
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
  }

  nodes.forEach((node) => observer.observe(node));
};
