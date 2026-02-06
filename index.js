import { clients, apps } from "./data/index.js";

import {
  create,
  startDev,
  startBuild,
  generateAllPages,
} from "./scripts/index.js";

const env = process.env.NODE_ENV;

await Promise.all(clients.map((project) => create(project, "client")));
await Promise.all(apps.map((project) => create(project, "app")));

const projects = [...apps, ...clients].sort((a, b) =>
  a.package.localeCompare(b.package),
);

await generateAllPages(projects);

if (env === "development") startDev(projects);
if (env === "production") startBuild(projects);
