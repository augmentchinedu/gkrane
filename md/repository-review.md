# Repository Review: GKrane (“The Great Unknown”)

## Executive summary

GKrane is a **platform foundation** built on Vue 3 + Vite with a custom Node-based orchestrator. It is designed to host multiple product packages with shared infrastructure. The strengths are clear orchestration, automated routing, and centralized bootstrap. The main gaps are **platform documentation**, **explicit ownership boundaries**, and **operational guardrails** (env contracts, health checks, compatibility policies).

## High-level architecture

### 1) Orchestration layer (platform entrypoint)
- `core/index.js` drives the platform lifecycle: generates package scaffolding, generates pages, then starts the correct runtime based on `NODE_ENV`.
- This makes the platform deterministic and repeatable, but also creates a **build→runtime dependency** that must be documented and validated.

### 2) Package registry (product inventory)
- `data/apps.js` and `data/softwares.js` are the authoritative package registry.
- This registry should be treated as product inventory (ownership, lifecycle, and release cadence should be attached).

### 3) Scaffolding layer (package instantiation)
- `scripts/project/create.js` generates package folders with a minimal `package.json`.
- This is a good start, but a platform requires a **standard package template** to avoid entropy.

### 4) Routing layer (auto-generated route trees)
- `scripts/pages/index.js` generates route trees for both global pages and package pages.
- `router/index.js` assembles and merges these, giving package routes override precedence.

### 5) State + data access (Pinia + GraphQL)
- `store/index.js` initializes client state, auth, and optional package modules.
- This bootstrap is central to the platform but also creates implicit contracts that need explicit documentation.

## Router + Store audit (coupling + scaling risks)

### Router (`router/index.js`)
- **Build→runtime coupling:** router depends on generated modules (`global-pages/index.js`, `package-pages/index.js`). If generation fails or is skipped, the app breaks at runtime. This must be enforced with a health check and onboarding docs.
- **Route name collisions:** route `name` is derived from filenames. Duplicate filenames across scopes can collide even if paths differ.
- **Dynamic meta mutation:** `beforeEnter` mutates `route.meta` after lazy import, which makes metadata non-deterministic at startup and harder to audit.
- **Auth guard coupling:** the guard assumes a `signin` route exists. Renames or removals will break redirects.

### Store (`store/index.js`)
- **Implicit environment contract:** development mode relies on `__USERNAME__` and `VITE_DEVELOPMENT_KEY` but there is no centralized env documentation.
- **Hard-coded package behavior:** `__PKG__ === "games"` triggers a package-specific import. This does not scale as the number of packages grows.
- **Auth/bootstrap coupling:** auth state depends on localStorage and GraphQL bootstrapping; partial failures can leave the app “instantiated” but incomplete.

## What’s working well

1. **Composable package model**: Treating packages as first-class products enables multi-domain growth.
2. **Auto-generated routing**: Reduces manual configuration and encourages consistent route conventions.
3. **Bootstrap sequencing**: Store initialization before router creation is correct for auth-dependent routing.

## Key gaps and risks (platform scale)

1. **Documentation is template-level**
   - The README does not describe platform architecture, orchestration, or package boundaries.
2. **Undefined ownership boundaries**
   - Global vs. package responsibilities are not explicit.
3. **Operational contracts are implicit**
   - Environment variables, auth flows, and runtime dependencies are undocumented.
4. **No release/compatibility policy**
   - The platform and packages lack versioning and compatibility declarations.

## Recommendations (optimize for long-term maintainability)

### Priority 1 (Immediate)
1. **Replace README with platform documentation**
   - Document orchestration, package registry, and routing flow.
2. **Add `docs/env.md`**
   - Explicitly document all env vars, secrets policy, and local dev setup.
3. **Introduce `CONTRIBUTING.md`**
   - Formalize global vs. package boundaries and contributor expectations.

### Priority 2 (Short-term)
4. **Add a package template**
   - Standardize `pages/`, `components/`, `store/`, `gql/` per package.
5. **Add a health check**
   - Validate page generation and route assembly in CI or pre-commit.
6. **Define a package registry contract**
   - Attach ownership, lifecycle, and release cadence to each package.

### Priority 3 (Medium-term)
7. **Introduce platform versioning + compatibility policy**
   - Ensure packages declare compatible platform versions.
8. **Replace hard-coded package hooks**
   - Use a registry-based plugin system instead of `__PKG__` conditionals.

## Suggested next step

If you want, I can:
- Replace the README with a platform overview and quickstart.
- Create `docs/env.md` and `CONTRIBUTING.md`.
- Implement a minimal page-generation health check.

