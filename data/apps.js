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
  },
  {
    package: "contacts",
    name: "Contacts",
    username: "contacts",
    ws: false,
  },
].sort((a, b) => a.package.localeCompare(b.package));
