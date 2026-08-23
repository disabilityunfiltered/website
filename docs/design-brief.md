# Design brief - Disability Unfiltered
Based on research completed 2026-08-14: teardowns of 7 acclaimed podcast sites (Radiolab, Huberman Lab, Diary of a CEO, 99% Invisible, SmartLess, Armchair Expert, On Being), podcast-platform guidance (Castos, Transistor, Buzzsprout, Lower Street, Podnews), and disability-sector design review (Scope UK, Australian Disability Network, Attitude NZ, Getty/Business Disability Forum imagery guidance, Stella Young's inspiration-porn critique). Full evidence trail: session notes 2026-08-14; key data points cited inline.

## The positioning insight

No Australian disability podcast has a proper website. ListenABLE (the biggest, Dylan Alcott) has none at all, offers no transcripts, and none of the checked shows put transcripts anywhere. A genuinely accessible site with full transcripts makes Disability Unfiltered the best-presented show in its space on day one, and transcripts carry proven SEO value: This American Life measured +6.68% search traffic and +4.36% inbound traffic after publishing its transcript archive (3Play Media case study).

## Homepage (proven pattern: 4+ of 7 acclaimed sites)

1. Hero: an identity statement saying what the show is and who it honours, plus release cadence. Never a generic welcome. Latest episode sits above the fold with an embedded player, following the 99% Invisible / On Being model, which beat the weak signpost-only sites.
2. Latest episodes as a card grid (3 cards: art, title, guest, date, transcript link visible on the card).
3. Follow band: "Follow the show" with Apple Podcasts, Spotify, YouTube badges. Wording is "Follow", never "Subscribe": Edison Research found 47% of non-listeners think subscribing costs money; Apple and Spotify both changed their wording for this reason.
4. Newsletter capture with a stated value promise (present on 5 of 7 acclaimed sites).
5. Footer: social icons (Instagram, Facebook, LinkedIn, YouTube), platform badges repeated, accessibility statement link, hello@ email.

## Episode page (the crown jewel, On Being model)

Order: title + guest + date; YouTube embed (privacy-enhanced); listen-on badges; plain-language summary; guest bio with photo; timestamped chapters; FULL on-page transcript; share buttons; related episodes. Transcript is on the page, not a download-only file.

## Navigation (5 items maximum)

Episodes, About, Be a Guest, Contact, plus a visually distinct Follow button. Accessibility statement linked in the footer. Weak sites had 15+ nav items or navs about the host instead of the show; this list never grows without removing something.

## Visual language

- Restraint is the proven disability-sector register (Scope, Australian Disability Network): one strong colour on a high-contrast neutral ground, nothing "medical", nothing charity-appeal.
- Palette and contrast rules: docs/brand.md (the only place hex values live outside tokens.css).
- Photography: real guests, named, photographed as experts on their own lives. Never stock. Banned: victory poses, finish-line shots, standing-next-to-the-wheelchair framing, soft-focus uplift (Getty Disability Collection and Business Disability Forum guidance; under 10% of disabled people use wheelchairs, up to 80% of disabilities are invisible, and imagery should reflect that).
- Type: plain-language sans-serif, generous sizes, no thin weights.

## Copy voice

Fact-forward and direct. Guests are experts on their own lives and on NDIS policy. Banned words in UI copy: "brave", "overcame", "despite", "special". Stella Young's inspiration-porn critique is the reference: the stories honour people; the framing never objectifies them for a non-disabled audience's benefit.

## Accessibility floor (launch requirement, not polish)

WCAG 2.2 AA: text contrast 4.5:1, UI contrast 3:1, pointer targets at least 24x24 CSS px, visible focus indicators (2px minimum, clearly contrasted), skip links, prefers-reduced-motion respected, no autoplay, full transcripts every episode, public accessibility statement page linked from the footer.

## Anti-patterns (observed on weak acclaimed-show sites, never do)

- Site as a mere signpost to Spotify with no on-page content (SmartLess).
- Badges for dead platforms left rotting (Armchair Expert still shows Google Play and Stitcher).
- Two-line episode notes with no transcript, player, or resources.
- Nav bloat.
