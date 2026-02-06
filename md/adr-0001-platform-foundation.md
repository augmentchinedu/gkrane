# ADR 0001: Platform Foundation Architecture

- **Status:** Accepted
- **Date:** 2025-02-14
- **Decision Owners:** Platform Architecture

## Context

GKrane is a multi-package platform foundation intended to host multiple product packages under a single monorepo. The platform must scale across teams, maintain consistent routing and state bootstrapping, and avoid drift between package and platform responsibilities. The system uses a custom Node-based orchestration layer to generate package scaffolding and routing indexes before booting runtime flows.

Key constraints and risks identified:
- Build→runtime coupling due to generated route modules.
- Route name collisions across packages as scale increases.
- Dynamic route metadata mutation that complicates policy auditing.
- Hard-coded package-specific logic in global code paths.
- Implicit environment contracts without centralized documentation.

## Decision

Adopt a **platform-first architecture** with explicit orchestration, package boundaries, and governance guardrails:

1. **Orchestration is the entrypoint**
   - `core/index.js` is the canonical runtime entry. All contributors must use `npm run dev` / `npm run build`, not raw Vite.

2. **Packages are first-class products**
   - The package registry (`data/apps.js`, `data/softwares.js`) is the source of truth for product inventory and ownership.

3. **Routing is generated and merged**
   - Global pages (`pages/`) and package pages (`packages/<package>/pages/`) are auto-discovered and merged, with package routes overriding globals.

4. **Ownership boundaries are explicit**
   - Shared code lives in `components/`, `store/`, and `gql/`.
   - Package-specific code lives under `packages/<package>/`.

5. **Governance is required for scale**
   - Each package must have ownership, a release cadence, and compatibility expectations with platform versions.

## Consequences

**Positive outcomes:**
- Deterministic builds via a single orchestrator entrypoint.
- Consistent routing and page discovery across packages.
- Clear boundaries that reduce global/package coupling.
- Governance posture suitable for multi-team scale.

**Tradeoffs / costs:**
- Higher coupling between build and runtime due to generated routing modules.
- Additional documentation and governance overhead.
- Requires future investment in health checks and plugin registries to avoid hard-coded package logic.

## Follow-up Actions

1. Replace the default README with canonical platform documentation.
2. Add `docs/env.md` for environment variable contracts.
3. Formalize `CONTRIBUTING.md` from onboarding guidance.
4. Introduce a package template to prevent entropy.
5. Add a health check for route generation and assembly.
6. Replace hard-coded package hooks (e.g., `__PKG__ === "games"`) with a registry/plugin system.

## References

- `README.md` (canonical platform documentation)
- `docs/contributor-onboarding.md`
- `docs/repository-review.md`
- `core/index.js`
- `router/index.js`
- `store/index.js`

