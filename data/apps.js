export const apps = [
  {
    package: "games",
    name: "Genesis Krane",
    username: "games",
    ws: true,
  },
  {
    package: "krane",
    name: "Genesis Krane",
    username: "genesiskrane",
    ws: false,
  },
  {
    package: "gallery",
    name: "Gallery",
    username: "gallery",
    ws: false,
  },
  {
    package: "stores",
    name: "Stores",
    username: "stores",
    ws: false,
    theme: {
      // Primary (your custom purple)
      "--color-md-primary": "#5b13ec",
      "--color-md-on-primary": "#ffffff",
      "--color-md-primary-container": "#e1d0ff",
      "--color-md-on-primary-container": "#1f0052",
      // Surfaces (your custom backgrounds)
      "--color-md-background": "#f6f6f8",
      "--color-md-on-background": "#1a1a1a",
      "--color-md-surface": "#ffffff",
      "--color-md-on-surface": "#1a1a1a",
      "--color-md-surface-variant": "#e7e2ec",
      "--color-md-on-surface-variant": "#49454e",
    },
  },
  {
    package: "contacts",
    name: "Contacts",
    username: "contacts",
    ws: false,
  },
].sort((a, b) => a.package.localeCompare(b.package));
