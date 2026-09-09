export const qs = (selector, scope = document) => scope.querySelector(selector);

export const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

export const el = (tag, options = {}, children = []) => {
  const node = document.createElement(tag);
  const { className, text, html, dataset = {}, attrs = {} } = options;

  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  if (html !== undefined) node.innerHTML = html;

  Object.entries(dataset).forEach(([key, value]) => {
    node.dataset[key] = value;
  });
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") node.setAttribute(key, value);
  });

  children.filter(Boolean).forEach((child) => node.append(child));
  return node;
};

export const clear = (node) => {
  while (node && node.firstChild) node.removeChild(node.firstChild);
  return node;
};

export const on = (target, event, handler, options) => {
  target?.addEventListener(event, handler, options);
  return () => target?.removeEventListener(event, handler, options);
};

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isMobile = () => window.innerWidth <= 768;
