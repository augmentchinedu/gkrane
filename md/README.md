# GKrane Platform Foundation (The Great Unknown)

GKrane is a **platform foundation** built on Vue 3 + Vite with a custom Node-based orchestrator. It hosts multiple product packages with shared infrastructure. This README is the canonical source of truth for how the platform works and how contributors should operate.

## How decisions are made here (trimmed)

We optimize for long-term platform clarity over short-term speed. If a decision makes onboarding, scaling, or reasoning harder later, it’s the wrong decision—even if it’s faster today.

**Principles (short):**
- Architecture > convenience.
- Global vs package boundaries are hard.
- Automate the boring, document the important.
- Bootstrap order is sacred.
- Scale is assumed, not hypothetical.
- Disagree clearly, decide once.

See `docs/decision-manifesto.md` for the full manifesto.

## What this platform is

- A **platform monorepo** with multiple product packages.
- A **deterministic orchestration flow** driven by `core/index.js` (not raw Vite CLI).
- A **shared infrastructure layer** with centralized routing, state bootstrapping, and GraphQL access.

If you are looking for a demo app or a single-product repo, this is not it.

## Architecture (high level)

### 1) Orchestration layer
- `core/index.js` generates package scaffolding and routing indexes, then starts the correct runtime based on `NODE_ENV`.
- This creates a **build→runtime dependency** that must be respected by all contributors.

### 2) Package registry
- `data/apps.js` and `data/softwares.js` are the authoritative **product inventory**.
- Every package is a first-class product that should have ownership and lifecycle policies.

### 3) Scaffolding layer
- `scripts/project/create.js` generates package folders under `packages/` with a minimal `package.json`.
- A **standard package template** is required to avoid entropy as the platform scales.

### 4) Routing layer
- `scripts/pages/index.js` generates route trees from `pages/` and `packages/*/pages/`.
- `router/index.js` assembles and merges these trees, giving package routes override precedence.

### 5) State + data access
- `store/index.js` initializes client state, auth, and optional package modules.
- This bootstrap is central to the platform and must be documented with explicit env contracts.

## Repository layout (ownership boundaries)

- `core/` — Orchestration and platform lifecycle.
- `data/` — Package registry (apps + softwares). **Official product inventory**.
- `packages/` — Per-product code (domain-specific UI, state, routes).
- `pages/` — Global routes (cross-product, platform UX).
- `components/` — Shared UI across packages.
- `router/` — Route assembly from generated route trees.
- `store/` — Global state, auth, client bootstrap.
- `gql/` — Platform GraphQL clients/queries.

**Boundary rule:** shared code lives in `components/`, `store/`, or `gql/`. Package-only code stays in `packages/<package>/`.

## How to run locally

Use the platform orchestration flow, not raw Vite:

- `npm run dev` → runs `core/index.js`
- `NODE_ENV` controls orchestration:
  - `development` → `startDev()`
  - `production` → `startBuild()`
  - `simulation` → `startSimulation()`

If `core/index.js` does not run, routes and packages will not be generated.

## Routing contract (global vs. package)

- **Global pages**: `pages/` → shared across all packages.
- **Package pages**: `packages/<package>/pages/` → override global routes when paths collide.
- Each `.vue` page generates a route entry with default `meta`: `drawer: true`, `auth: false`.

### Page-level `routeMeta`

Pages can refine metadata and guards by exporting:

```js
export const routeMeta = {
  meta: { auth: true },
  beforeEnter(to, from, next) {
    next();
  },
};
```

## Platform risks (must be understood)

These are known coupling/scaling risks that shape how contributors should work:

- **Build→runtime coupling:** router depends on generated modules. Skipping page generation will break runtime.
- **Route name collisions:** route `name` is derived from filenames, so duplicate names across scopes can collide.
- **Dynamic meta mutation:** `route.meta` can be mutated after lazy import, making metadata non-deterministic.
- **Auth guard coupling:** the global guard assumes a `signin` route exists.
- **Implicit env contract:** development relies on `__USERNAME__` and `VITE_DEVELOPMENT_KEY` but is not yet documented in a central `docs/env.md`.
- **Hard-coded package behavior:** `__PKG__ === "games"` is a non-scalable pattern and must be replaced with registry-based hooks.

## Contribution workflow (platform scale)

### Adding a new package

1. Register the package in `data/apps.js` or `data/softwares.js`.
2. Run `npm run dev` (or `npm run build`) to generate scaffolding and pages.
3. Add `packages/<package>/pages/` and package-specific UI/state.
4. Ensure global vs. package route ownership is respected.

### Shared vs. package code

- If multiple packages depend on a component, move it to `components/`.
- If it is package-specific, keep it inside `packages/<package>/`.

### Compatibility expectations

- Avoid introducing hard-coded package logic in global code paths.
- Prefer configurable hooks or registries to scale beyond a single product.

## Governance & long-term maintainability

- Each package should have a **named owner**, **release cadence**, and **deployment responsibility**.
- The **platform should be versioned independently** from packages.
- Packages should declare **compatibility** with platform versions.

## Recommended next steps

1. Add `docs/env.md` for environment variables and secrets management.
2. Add `CONTRIBUTING.md` formalized from onboarding guidance.
3. Introduce a package template to standardize structure.
4. Add a health check for page generation and route assembly.
5. Replace hard-coded package hooks with a registry/plugin system.

