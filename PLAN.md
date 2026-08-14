# Disability Stories - Build Plan
Status: AWAITING MATT'S GO. Nothing below has been built yet except this folder, this plan, CLAUDE.md, and the desktop shortcut.
Last updated: 2026-08-14

## 1. What this is

A podcast brand site at disabilitystories.com.au. The podcast interviews people with disabilities to honour their stories, surface inspiring journeys, and push for change in the disability sector (NDIS). The site must look like a serious brand from day one.

Project email for all accounts: hello@disabilitystories.com.au
Existing channels: Instagram, Facebook, LinkedIn, YouTube.

## 2. Brand colours (verified 2026-08-14)

Pulled from the live heartsinaction.com.au homepage HTML (hex frequency scan) and the working folder at Documents\Hearts In Action\Hearts In Action Website HTML.

| Role | Hex | Evidence |
|------|-----|----------|
| Deep teal (headings, nav, footer) | #1A3A42 | 28 uses in live homepage inline styles, most-used colour on the site |
| Mid teal (primary brand, buttons, links) | #5A9CA6 | 12 uses live; also --teal in ndis-funding-calculator.html:9 |
| Soft teal (tints, eyebrows, washes) | #8FC1C9 | --teal-soft in ndis-funding-calculator.html:11 |
| Teal dark (hover states) | #3F7680 | --teal-dark in ndis-funding-calculator.html:10 |
| Deep purple (footer background) | #151E3F | Confirmed by Matt 2026-08-14; live footer defines --ft-deep: #151E3F as its background (inline style block in <footer>, elementor id 14626) |
| Warm white background | #F9F7F3 | Found once in live homepage; matches the warm-neutral direction in the HIA CRO colour research |

Rationale on record: Documents\Hearts In Action\Claudi AI\Research\CRO-Color-Design-Guide.md recommends muted teals plus warm neutrals for trust with disability-sector audiences. Same logic applies here.

## 3. Architecture recommendation

**Static site built with Eleventy (11ty, pure JavaScript), deployed as a Render Static Site.**

Why this and not a Node/Express web service:
- Render static sites are free; a Node web service is USD 7+/month for zero benefit here. Nothing on this site needs a server: no logins, no database, no dynamic pages.
- Static = fastest possible load and best SEO, which matters for a brand that wants to rank for disability stories.
- No server to patch, crash, or cold-start.
- Eleventy is JavaScript end to end (templates, config, data), satisfying the JavaScript requirement.
- If a server is ever genuinely needed later (e.g. a contact form backend), add a tiny separate service then; do not start with one.

**The critical design decision: content and code are fully separated.**
Every episode is one small Markdown file with front matter (title, guest, date, YouTube ID, Spotify URL, transcript). Publishing episode 200 means adding one text file; zero code changes. This is the direct answer to the "monstrous size" worry: the codebase stays roughly the same size forever, only the content folder grows, and content files never need to be searched to make a code change.

**Podcast plumbing (important, the website is only half the setup):**
- Audio should live on a podcast host that generates the RSS feed Apple Podcasts and Spotify require. Recommended: Spotify for Creators (free) to start; Transistor or Buzzsprout later if more control is wanted. The website does NOT host audio files; that would bloat the repo and Render static hosting is not an audio CDN.
- Video episodes live on the existing YouTube channel; the site embeds them.
- The site links out to every platform (Apple, Spotify, YouTube) per episode.

**Social integration (Instagram, Facebook, LinkedIn, YouTube):**
- Header and footer icons linking to all four channels, on every page.
- Per-episode YouTube embed (privacy-enhanced youtube-nocookie.com).
- A follow/subscribe strip section reused across pages.
- Deliberately NOT using Instagram/Facebook API feeds: tokens expire, Meta breaks them regularly, and a dead feed widget looks worse than no widget. If a live feed is ever wanted, use official embed codes on one Community page only.

## 4. Site map (initial)

- / (home: latest episode hero, what the podcast is, listen-on badges, follow strip)
- /episodes/ (all episodes, newest first)
- /episodes/[slug]/ (one page per episode: embed, show notes, guest bio, full transcript)
- /about/ (mission, host, why these stories matter)
- /be-a-guest/ (invite people to share their story; mailto or form later)
- /contact/
- Accessibility statement page (non-negotiable for this brand)

## 5. Accessibility is a brand requirement

The audience includes the people the podcast honours. Target WCAG 2.2 AA minimum:
- Full transcript on every episode page (also the biggest SEO asset the site will have).
- Colour contrast checked for every text/background pair before launch.
- Semantic HTML, skip links, visible focus states, prefers-reduced-motion respected.
- No autoplay anything.

## 6. Repository structure (designed for easy changes at any size)

```
disability-stories/
  CLAUDE.md              <- index + hard rules only, never content (cap 60 lines)
  PLAN.md                <- this file, replaced as decisions land
  docs/
    architecture.md      <- how the build works (cap 120 lines)
    brand.md             <- colours, type, voice (cap 120 lines)
    content-workflow.md  <- how to add an episode (cap 80 lines)
    deploy.md            <- Render setup, DNS, env (cap 80 lines)
  content/
    episodes/            <- one .md per episode, grows forever, never touched by code changes
    pages/               <- about, contact etc. as markdown
  src/
    _includes/
      layouts/           <- base.njk, episode.njk, page.njk
      components/        <- one file per component (header, footer, follow-strip, episode-card, player-embed)
    css/                 <- one file per component, tokens.css holds ALL colour/spacing variables
    js/                  <- only if genuinely needed; static site should need almost none
  eleventy.config.js
  package.json
```

Findability rules that keep changes cheap forever:
- One component = one template file + one CSS file, same name (follow-strip.njk / follow-strip.css). "Change the footer" is always exactly two known files.
- All colours and spacing exist only in tokens.css as CSS variables. A rebrand is a one-file change.
- No source file over 300 lines; split before it gets there.
- No duplicated markup: shared pieces become components immediately.

## 7. Documentation anti-bloat rules (Matt's requirement, enforced in CLAUDE.md)

1. REPLACE, never append. When a rule or fact changes, the old text is deleted in the same edit. No "UPDATE:" sections, no changelogs inside docs (git history is the changelog).
2. Hard line caps per file (listed in the tree above). At the cap, content must be tightened or split by topic, never allowed to sprawl.
3. Each fact lives in exactly one file. Other files link to it rather than restating it.
4. Docs describe the CURRENT state only. Superseded material is deleted, not archived inside the doc.
5. CLAUDE.md is an index plus hard rules, max 60 lines, and points to docs/ for everything else.

## 8. Services and accounts (all under hello@disabilitystories.com.au)

| Service | Purpose | Cost | Status |
|---------|---------|------|--------|
| Render static site | Hosting | Free | Render workspace already connected in Claude Code; site not created yet |
| Domain disabilitystories.com.au | Purchased | Done | Registrar: ChemiCloud (domain only, never touch). DNS: Cloudflare Free, Matt's account. See "DNS facts" below |
| Email hosting for hello@ | Mailboxes for the domain | Zoho | DONE per Matt 2026-08-14 |
| Podcast host (RSS) | Feed for Apple/Spotify | Spotify for Creators: free | Account exists per Matt 2026-08-14 |
| GitHub repo | Source of truth, Render deploys from it | Free | Not created |

### DNS facts (provided by Matt 2026-08-14, move to docs/deploy.md in Phase 1)

- Registrar: ChemiCloud, domain only. DNS does NOT live there. Never change anything at ChemiCloud.
- DNS host: Cloudflare Free plan, Matt's own Cloudflare account. Nameservers rosalie.ns.cloudflare.com / vin.ns.cloudflare.com.
- Records that must NEVER be modified or deleted (live Zoho Mail Australia email): 3x MX (mx.zoho.com.au prio 10, mx2.zoho.com.au prio 20, mx3.zoho.com.au prio 50), TXT SPF (v=spf1 include:zohomail.com.au ~all), TXT zmail._domainkey (DKIM), TXT _dmarc (DMARC), TXT zoho-verification.
- Connecting Render (final step, after the site is proven on its temporary .onrender.com URL): add CNAME @ -> the service's .onrender.com hostname and CNAME www -> same, both DNS only (grey cloud) until Render issues the certificate; Cloudflare SSL/TLS mode Full; no AAAA records. These coexist with the mail records.
- Only Matt has the Cloudflare login. Matt adds the two CNAMEs himself when given the .onrender.com hostname, or does it together with Claude in a session.

## 9. Build phases (each waits for a go)

1. Phase 1, foundation: repo, Eleventy scaffold, tokens.css with verified palette, base layout, header/footer with social links, home + about + contact, deploy to Render, connect domain. Result: a live, serious-looking brand site.
2. Phase 2, episodes: episode content model, episodes index, episode template with YouTube embed + transcript block, listen-on badges, first real episode in.
3. Phase 3, growth: OG/social share images, JSON-LD PodcastSeries/PodcastEpisode schema, sitemap, RSS-linked buttons, be-a-guest page, analytics (privacy-respecting, e.g. Plausible or GA4).

## 10. Confirmed by Matt (2026-08-14)

- Purple = #151E3F, the HIA footer background colour.
- Email: Zoho already set up for hello@disabilitystories.com.au.
- Podcast name: Disability Stories.
- Spotify for Creators account already exists.

## 11. Open questions for Matt

1. Host name/bio and any launch episodes already recorded?
