import fs from "fs/promises";
import path from "path";

export { startDev } from "./dev.js";
export { startBuild } from "./build.js";
export { generateAllPages } from "./pages.js";

export async function create(project, type) {
  const packagesDir = path.resolve("packages");
  const projectDir = path.join(packagesDir, type + "s", project.package);

  // Ensure packages directory exists
  await fs.mkdir(packagesDir, { recursive: true });

  // Skip if project already exists
  try {
    await fs.access(projectDir);
    return;
  } catch {
    // Directory does not exist → continue
  }

  // Create project directory
  await fs.mkdir(projectDir, { recursive: true });
  console.log(`Created project: ${project.package}`);
}
