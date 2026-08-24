# Disability Unfiltered - Build Plan
Status: PHASE 1 LIVE at https://disabilityunfiltered.com.au with email signup. Phase 2: episode template and content model built (docs/content-workflow.md); first real episode and announcement email outstanding. Last updated 2026-08-23.

## 1. What this is

A podcast brand site at disabilityunfiltered.com.au, started by Matt and Ayla from Hearts In Action. The podcast interviews people with disability to honour their stories, surface inspiring journeys, and push for change in the disability sector (NDIS). The site must look like a serious brand from day one.

Project email for all accounts: hello@disabilityunfiltered.com.au. Channels: Instagram, Facebook, LinkedIn, YouTube (URLs still to come for src/_data/site.js).

## 2. Architecture decisions (how the build works: docs/architecture.md)

- Eleventy static site on Render, free tier. No app server: nothing here needs one.
- Content and code are fully separated. Every episode is one Markdown file in content/episodes/; publishing episode 200 is one text file, zero code changes.
- The only backend is a single Cloudflare Worker for the email signup (docs/deploy.md). Add another only for a genuine need.
- Audio lives on a podcast host that produces the RSS feed (Spotify for Creators to start). Video lives on YouTube; the site embeds it (privacy-enhanced). The site never hosts media files.
- No Instagram/Facebook API feeds: tokens expire and dead widgets look worse than none. Icons link out instead.
- Rules for findability, colours, components and file size: CLAUDE.md.

## 3. Site map

/ (hero, episode reel, follow strip), /episodes/, /episodes/[slug]/ (Phase 2), /about/, /be-a-guest/, /contact/, /follow/ (listen badges, social links, email signup), /accessibility/.

## 4. Accessibility is a brand requirement

WCAG 2.2 AA minimum: full transcript on every episode page, every colour pair contrast-checked (docs/brand.md), semantic HTML, skip link, visible focus, reduced-motion respected, no autoplay, menu and forms usable without JavaScript.

## 5. Services and accounts (all under hello@disabilityunfiltered.com.au; details in docs/deploy.md)

| Service | Purpose | Cost |
|---------|---------|------|
| GitHub disabilityunfiltered/website | Source of truth; Render deploys on push | Free |
| Render static site | Hosting | Free |
| Cloudflare | DNS for the domain; Worker for email signup | Free |
| Resend | Email list and sending (welcome email, episode announcements) | Free tier |
| Zoho Mail | hello@ mailbox | Existing |
| ChemiCloud | Domain registrar only, never touched | Paid by Matt |
| Spotify for Creators | Podcast RSS host | Free |

## 6. Build phases

1. Phase 1, foundation: DONE. Live site, brand system, pages, domain, email signup with welcome email.
2. Phase 2, episodes: DONE content model, episode template (YouTube embed, audio player, listen badges, summary, guest bio, chapters, full transcript, share, older/newer), episodes index, docs/content-workflow.md. REMAINING: first real episode, and automatic episode announcement email (GitHub Action sends a Resend Broadcast when a new episode file lands).
3. Phase 3, growth: OG/social share images per episode, JSON-LD PodcastSeries/PodcastEpisode schema, sitemap, analytics (privacy-respecting).

## 7. Open questions for Matt

1. Host name/bio and any launch episodes already recorded?
2. Social and listen URLs for src/_data/site.js.
3. Rename the Render service from disability-stories to disability-unfiltered (dashboard form would not save; use the API or support).
4. Retire the old Render service on the original account (disability-stories.onrender.com) and replace the Resend API key that was pasted into chat on 2026-08-23.
