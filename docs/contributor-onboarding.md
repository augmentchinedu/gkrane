# Contributor Onboarding (Platform Foundation)

This guide is the **source of truth** for new contributors. GKrane is a platform foundation (not a demo app). Expect multiple product packages, shared infrastructure, and strict compatibility requirements.

## 1) Platform mental model

GKrane is a **platform monorepo** with multiple product packages. Each package is a discrete product surface with shared infrastructure.

Key idea: **the platform is orchestrated**, not a raw Vite app.
- `core/index.js` is the platform entrypoint.
- It generates package scaffolding and routing indexes.
- It then boots the correct runtime based on `NODE_ENV`.

## 2) Repository layout (ownership boundaries)

- `core/` — Orchestration and platform lifecycle.
- `data/` — Package registry (apps + softwares). These are the **official product inventory**.
- `packages/` — Per-product code (domain-specific UI, state, routes).
- `pages/` — Global routes (cross-product, platform-level UX).
- `components/` — Shared UI across packages.
- `router/` — Route assembly from generated route trees.
- `store/` — Global state, auth, client bootstrap.
- `gql/` — Platform GraphQL clients/queries.

**Boundary rule:** shared code belongs in `components/`, `store/`, or `gql/`. Package-only code lives inside `packages/<package>/`.

## 3) How to run locally (platform flow)

- `npm run dev` → runs `core/index.js` (not Vite directly).
- `NODE_ENV` determines the orchestration flow:
  - `development` → `startDev()`
  - `production` → `startBuild()`
  - `simulation` → `startSimulation()`

If `core/index.js` does not run, routes and packages will not be generated.

## 4) Routing contract (global vs. package)

Pages are auto-discovered and compiled into route trees.

- **Global pages**: `pages/` → shared across all packages.
- **Package pages**: `packages/<package>/pages/` → override global routes when the same path exists.

Each `.vue` page generates a route entry with default `meta` values: `drawer: true`, `auth: false`.

### Page-level `routeMeta`

Pages can export `routeMeta` to refine metadata and guards:

```js
export const routeMeta = {
  meta: { auth: true },
  beforeEnter(to, from, next) {
    next();
  },
};
```

## 5) Environment configuration (required)

The store expects `VITE_DEVELOPMENT_KEY` (and `__USERNAME__` in dev). These are **required** for development bootstrap. Document additional env variables in `docs/env.md` as they are introduced.

## 6) Contribution workflow (platform scale)

### Adding a new package

1. Register the package in `data/apps.js` or `data/softwares.js`.
2. Run `npm run dev` (or `npm run build`) to generate scaffolding and pages.
3. Add `packages/<package>/pages/` and package-specific UI/state.
4. Ensure global vs. package route ownership is respected.

### Shared vs. package code

- If more than one package depends on a component, move it to `components/`.
- If it is package-specific, keep it inside `packages/<package>/`.

### Compatibility expectations

- Avoid introducing hard-coded package logic in global code paths.
- Prefer configurable hooks or registries to scale beyond a single product.

## 7) Governance & long-term maintainability

### Ownership

Each package should have:
- A named owner (team or individual).
- A release cadence and deployment responsibility.

### Release discipline

- The platform should be versioned independently from packages.
- Packages should declare compatibility with platform versions.

### Quality gates (recommended)

- A health check that validates page generation and route assembly.
- A lint/test gate for platform code paths (`core/`, `router/`, `store/`).

## 8) Next docs to formalize

- `docs/architecture.md` with diagrams and platform lifecycle flow.
- `docs/env.md` for environment variables and secrets management.
- `CONTRIBUTING.md` formalized from this guide.

