# Disability Unfiltered (disabilityunfiltered.com.au)

Podcast brand site. Eleventy static site (JavaScript), deployed on Render. Content lives in content/, code in src/. Full plan and current status: PLAN.md.

## Hard rules (apply to every session in this folder)

1. Advice before action: questions get advice only; edit nothing until Matt says go.
2. Scope discipline: change exactly what was asked; everything else stays byte-identical.
3. No em dashes in anything written for the site or for Matt.
4. Accessibility is a launch requirement, not a polish item: WCAG 2.2 AA, transcripts on every episode page, contrast-checked colours, no autoplay.
5. All colours and spacing come from src/css/tokens.css variables only. Never hard-code a hex anywhere else.
6. One component = one template file + one matching CSS file, same base name.
7. No source file over 300 lines. Split before it gets there.
8. Adding an episode touches ONLY content/episodes/. If an episode requires a code change, the design is broken; fix the template instead.

## Documentation rules (anti-bloat, non-negotiable)

1. REPLACE, never append. When a rule or fact changes, delete the old text in the same edit. No "UPDATE:" notes, no history sections; git is the changelog.
2. Line caps: this file 60, docs/architecture.md 120, docs/brand.md 120, docs/design-brief.md 90, docs/content-workflow.md 80, docs/deploy.md 80. At the cap, tighten or split by topic.
3. Each fact lives in exactly one file; elsewhere, link to it.
4. Docs describe the current state only. Superseded text is deleted, not archived in place.
5. This file stays an index plus rules. Content, evidence, and how-tos belong in docs/.

## Where things are

- PLAN.md: current plan, phase status, open questions.
- docs/design-brief.md: research-backed design direction (done 2026-08-14).
- docs/brand.md: verified palette, type, voice (create in Phase 1).
- docs/architecture.md: how the build works (create in Phase 1).
- docs/content-workflow.md: how to add an episode (create in Phase 2).
- docs/deploy.md: Render, DNS, email (create in Phase 1).
- Project email for all accounts: hello@disabilityunfiltered.com.au
