# Brand

## Colours (tokens.css is the only place these hexes exist in code)

| Token | Hex | Use | Contrast rule |
|-------|-----|-----|---------------|
| --ground | #F9F7F3 | Page background | |
| --ink | #1A3A42 | Headings, nav, primary buttons | 11.3:1 on ground |
| --text | #33424A | Body text | 9+:1 on ground |
| --teal | #5A9CA6 | Decoration, borders, large fills ONLY | 2.9:1 - NEVER text on light |
| --teal-strong | #3A6E77 | Links, hovers, interactive | 5.34:1 on ground, 5.03:1 on tint (AA; darkened from HIA's #3F7680, which failed on tint at 4.49:1) |
| --teal-soft | #8FC1C9 | Tints, eyebrows on dark | 8.2:1 on purple |
| --tint | #EAF2F3 | Alternating section wash | |
| --purple | #151E3F | Footer, depth blocks | white on it: 16:1 |

Source: verified against live heartsinaction.com.au 2026-08-14 (deep/mid teal from homepage inline styles; purple from footer --ft-deep).

## Logo

Master: Logo/disability_stories_logo_square_tight_1.png (3000px square, white background, NOT in the build). Web assets generated from it live in src/assets/: logo-mark.png (mic only, header chip), logo-full.png (full lockup, hero card), favicon-32.png, apple-touch-icon.png, og-image.png. The PNG background is solid white, so on coloured bands the logo always sits inside a white rounded card (.logo-chip in the header, .hero-logo on the home page); never place it directly on teal or purple. Regenerate sizes from the master if the logo changes.

## Type

DM Sans (Google Fonts), matching the HIA footer. Weights 400/500/700. No thin weights, generous sizes (body 17px).

## Voice

Official description (Matt, 2026-08-14): "Disability Stories is a podcast sharing real conversations from across the disability community. We speak with people with disability, families, support workers, providers and others with lived or professional experience. We explore the stories, challenges, ideas and people shaping disability support in Australia, while also seeking out inspiring stories of resilience, achievement and positive change. Our goal is to create honest conversations that inform, connect and give people a stronger voice."

Register: fact-forward, direct, warm through specifics not sentiment. Guests are experts on their own lives.
Banned in UI copy: "brave", "overcame", "despite", "special". Say "Follow", never "Subscribe".

## Imagery (when photos arrive)

Real guests, named, photographed as experts. Never stock. Banned: victory poses, finish-line shots, standing-next-to-the-wheelchair framing, soft-focus uplift. Most disabilities are invisible; imagery should reflect that. Full rationale: docs/design-brief.md.
