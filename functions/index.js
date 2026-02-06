export function createViteEnv(project, mode = "production") {
  return {
    ...process.env,
    NODE_ENV: mode,
    PACKAGE: project.package,
    USERNAME: project.username,
    WEBSOCKET: project.ws,
    THEME: JSON.stringify(project.theme),
  };
}
