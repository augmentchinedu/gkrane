# How Decisions Are Made Here

GKrane / The Great Unknown – Decision Manifesto

## Our north star

We optimize for long-term platform clarity over short-term speed. If a decision makes onboarding, scaling, or reasoning harder later, it’s the wrong decision—even if it’s faster today.

## Decision principles

1. **Architecture > Convenience**
   - Prefer explicit structure over clever shortcuts.
   - If something is implicit, undocumented, or magical, it must earn its place.

2. **Global vs Package is a hard boundary**
   - Global code exists to enable packages, not to absorb their complexity.
   - Package code owns its domain fully.
   - If ownership is unclear, the decision is incomplete.

3. **Automate the boring, document the important**
   - Repetitive work should be scripted.
   - Non-obvious decisions must be written down.
   - If a newcomer can’t understand why something exists, we failed.

4. **Bootstrap order is sacred**
   - Initialization, state, auth, and routing follow a deliberate sequence.
   - Any change that breaks this order must be justified explicitly.

5. **Scale is assumed, not hypothetical**
   - We decide as if more packages, contributors, and environments are coming.
   - If it only works “for now,” it’s technical debt by definition.

6. **Disagree clearly, decide once**
   - Debate is welcome. Re-litigation is not.
   - Once a decision is made and documented, we move forward unless new constraints appear.

## How decisions are finalized

**Proposal → architectural impact → tradeoffs → decision**

Decisions affecting structure, routing, or bootstrap must be documented. Code without intent is considered incomplete.

## Where this lives

- **README (trimmed)**: a short version for quick orientation.
- **CONTRIBUTING.md (full)**: the authoritative version for contributors.
- **Pinned message**: a reminder for the team.

