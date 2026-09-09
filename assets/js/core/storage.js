const PREFIX = "portfolio:";

export const read = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(PREFIX + key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
};

export const write = (key, value) => {
  try {
    localStorage.setItem(PREFIX + key, value);
  } catch {
    /* almacenamiento no disponible */
  }
};
