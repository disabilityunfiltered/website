# Architecture

Eleventy 3 (ESM) static site. Node 24. Build: `npm run build` (output `_site/`). Dev server: `npm run dev`.

## How a page gets built

- Page templates live in `src/pages/` with explicit `permalink` front matter. Markdown pages use `layouts/page.njk`; structured pages use `layouts/base.njk` directly.
- `layouts/base.njk` is the single HTML shell: head/meta, skip link, header, footer, CSS links. Every page goes through it.
- Components live in `src/_includes/components/`, one file per component, included with `{% include %}`.
- Episodes are Markdown files in `content/episodes/` (Phase 2). The `episodes` collection is defined in `eleventy.config.js` (glob on that folder, newest first). Adding an episode never touches code.
- Site-wide facts (name, email, social URLs, listen links) live ONLY in `src/_data/site.js`, exposed as `site.*` in templates. Fill in a URL there and the matching icon/badge appears site-wide; null hides it.

## CSS

- `src/css/tokens.css` holds every colour, font, spacing and size token. No hex codes anywhere else.
- One CSS file per component, same base name as its template (header.css/header.njk). Page-scoped styles use the page's name (home.css styles index.njk's hero/latest/mission sections). `base.css` holds reset, typography, buttons, focus states, utilities.
- CSS is passthrough-copied to `/css/`; each file is linked in base.njk. Adding a component = adding one link tag there.
- JS lives in `src/js/`, one file per interactive component, passthrough-copied to `/js/`, loaded with a deferred script tag inside the component's own .njk. Currently only episode-reel.js (the 3D episode fan: buttons, drag, arrow keys). Interactivity is optional enhancement; content must work without JS.

## Findability contract

- "Change component X" = `src/_includes/components/X.njk` + `src/css/X.css`. Nothing else.
- "Change a colour" = `src/css/tokens.css`. Nothing else.
- "Change a social/listen link" = `src/_data/site.js`. Nothing else.
- "Change page copy" = the one file in `src/pages/`.

## Build config

`eleventy.config.js`: passthrough copy for css/assets, episodes collection, `readableDate` filter (en-AU), `year` shortcode. `.eleventyignore` keeps docs/, PLAN.md, CLAUDE.md, README.md out of the build.
