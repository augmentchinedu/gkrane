export function createViteEnv(project, mode = "production") {
  return {
    ...process.env,
    NODE_ENV: mode,
    PACKAGE: project.package,
    USERNAME: project.username,
    WEBSOCKET: project.ws,
    TYPE: project.type,
    THEME: JSON.stringify(project.theme),
  };
}
