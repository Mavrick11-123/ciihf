/** Astro `base` with a trailing slash so `${base}about` becomes `/ciihf/about`. */
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
