import fs from "fs";
import path from "path";
import prettier from "prettier";

function getExistingComponents(indexFile) {
  if (!fs.existsSync(indexFile)) return new Set();

  const content = fs.readFileSync(indexFile, "utf-8");
  const matches = [
    ...content.matchAll(/component:\s*\(\)\s*=>\s*import\(["'`](.*?)["'`]\)/g),
  ];

  return new Set(matches.map((m) => m[1]));
}

function getExistingPaths(indexFile) {
  if (!fs.existsSync(indexFile)) return new Set();

  const content = fs.readFileSync(indexFile, "utf-8");
  const matches = [...content.matchAll(/path:\s*["'`](.*?)["'`]/g)];

  return new Set(matches.map((m) => m[1]));
}

function getExportedNames(fileContent) {
  const exports = {};
  const nameMatch = fileContent.match(
    /export\s+(?:const|let|var|function|class)?\s*name\s*=\s*["'`](.*?)["'`]/,
  );
  const pathMatch = fileContent.match(
    /export\s+(?:const|let|var)?\s*path\s*=\s*["'`](.*?)["'`]/,
  );
  const metaMatch = fileContent.match(
    /export\s+(?:const|let|var)?\s*meta\s*=\s*(\{[\s\S]*?\})/,
  );
  const beforeEachMatch = fileContent.match(
    /export\s+(?:function|const|let|var)?\s*beforeEach\s*=?\s*(.*)/,
  );

  if (nameMatch) exports.name = nameMatch[1];
  if (pathMatch) exports.path = pathMatch[1];
  if (metaMatch) exports.meta = metaMatch[1].trim();
  if (beforeEachMatch) exports.beforeEach = beforeEachMatch[1].trim();

  return exports;
}

function scanFolder(dir, basePath = "") {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      const children = scanFolder(fullPath, path.join(basePath, entry.name));
      if (children.length) {
        routes.push(`{
  path: "/${entry.name.toLowerCase()}",
  children: [
${children.join(",\n")}
  ]
}`);
      }
    } else if (entry.isFile() && entry.name.endsWith(".vue")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const exported = getExportedNames(content);

      const fallbackName = entry.name.replace(/\.vue$/, "").toLowerCase();
      const name = (exported.name || fallbackName).toLowerCase();
      const routePath = (exported.path || fallbackName).toLowerCase();
      const meta = exported.meta || "{}";
      const beforeEach = exported.beforeEach || "undefined";

      routes.push(`{
  component: () => import("./${relativePath.replace(/\\/g, "/")}"),
  name: "${name}",
  path: "${routePath}",
  meta: ${meta},
  beforeEach: ${beforeEach}
}`);
    }
  });

  return routes;
}

// ✅ Make writeIndex async to await Prettier formatting
// Write index.js for a folder with default export
async function writeIndex(dir, routes) {
  if (!routes.length) return;

  const indexFile = path.join(dir, "index.js");

  const existingPaths = getExistingPaths(indexFile);
  const existingComponents = getExistingComponents(indexFile);

  const newRoutes = routes.filter((route) => {
    const pathMatch = route.match(/path:\s*["'`](.*?)["'`]/);
    const componentMatch = route.match(/import\(["'`](.*?)["'`]\)/);

    if (!pathMatch || !componentMatch) return true;

    const routePath = pathMatch[1];
    const componentPath = componentMatch[1];

    // 🚫 Skip if path OR component already exists
    if (existingPaths.has(routePath)) return false;
    if (existingComponents.has(componentPath)) return false;

    return true;
  });

  if (!newRoutes.length) return;

  let content;

  if (fs.existsSync(indexFile)) {
    const existing = fs
      .readFileSync(indexFile, "utf-8")
      .replace(/,\s*\]/, "\n]") // 🔥 remove trailing comma safely
      .trim();

    content = existing.replace(
      /\]\s*;?$/,
      `${existing.includes("[") && existing.match(/\[\s*\]/) ? "" : ","}
${newRoutes.join(",\n")}
]`,
    );
  } else {
    content = `export default [
${newRoutes.join(",\n")}
];
`;
  }

  try {
    content = await prettier.format(content, { parser: "babel" });
  } catch (err) {
    console.warn("Prettier formatting failed:", err);
  }

  fs.writeFileSync(indexFile, content, "utf-8");
}

// Main function
export async function generateAllPages(projects, type) {
  for (const project of projects) {
    const projectPagesDir = path.join(
      "packages",
      project.type + "s",
      project.package,
      "pages",
    );
    const projectRoutes = scanFolder(projectPagesDir);
    await writeIndex(projectPagesDir, projectRoutes);
  }

  const globalPagesDir = path.join("pages");
  const globalRoutes = scanFolder(globalPagesDir);
  await writeIndex(globalPagesDir, globalRoutes);
}
