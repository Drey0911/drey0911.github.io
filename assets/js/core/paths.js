const base = document.documentElement.dataset.base || "";

export const asset = (path) => `${base}${path}`.replace(/([^:]\/)\/+/g, "$1");

export const projectImage = (folder, file) => asset(`img/projects/${folder}/${file}`);

export const projectUrl = (id) => asset(`project-detail/?id=${encodeURIComponent(id)}`);
