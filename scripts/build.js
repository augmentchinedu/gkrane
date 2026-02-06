import path from "path";
import { spawn } from "child_process";
import { createViteEnv } from "../functions/index.js";

const isCI = process.env.CI === "true";

const isWatch = process.env.WATCH === "true";
// Use root Vite binary
const ROOT_VITE_BIN = path.resolve("node_modules", ".bin", "vite");

function runViteBuild(project) {
  return new Promise((resolve, reject) => {
    const args = ["build"];

    if (isWatch) {
      args.push("--watch");
    }

    const child = spawn(ROOT_VITE_BIN, args, {
      cwd: process.cwd(),
      stdio: "inherit",
      shell: true,
      env: createViteEnv(project, process.env.NODE_ENV || "production"),
    });

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed for ${project.package}`));
    });
  });
}

export async function startBuild(projects) {
  console.info("🚀 Building all projects...");

  const sanitizedProjects = projects.map((project) => {
    if (!process.env.MACHINE) delete project.username;
    return project;
  });

  try {
    if (isCI) {
      // ✅ CI: ALWAYS serial
      for (const project of sanitizedProjects) {
        await runViteBuild(project);
      }
      console.info("🏁 All CI builds completed.");
      process.exit(0);
    } else {
      // 💻 Local dev only
      await Promise.all(sanitizedProjects.map(runViteBuild));
      console.info("👀 Watch mode active.");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
