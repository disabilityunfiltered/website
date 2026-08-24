# Brand

## Colours (tokens.css is the only place these hexes exist in code)

| Token | Hex | Use | Contrast rule |
|-------|-----|-----|---------------|
| --ground | #F9F7F3 | Page background | |
| --ink | #1A3A42 | Headings, header block, primary buttons | 11.3:1 on ground |
| --text | #33424A | Body text | 9+:1 on ground |
| --teal | #5A9CA6 | Decoration, borders, large fills ONLY | 2.9:1 - NEVER text on light |
| --teal-strong | #3A6E77 | Links, hovers, interactive | 5.34:1 on ground, 5.03:1 on tint (AA; darkened from HIA's #3F7680, which failed on tint at 4.49:1) |
| --teal-soft | #8FC1C9 | Tints, eyebrows on dark | 7.63:1 on purple |
| --tint | #EAF2F3 | Alternating section wash, follow strip | |
| --purple | #232539 | Footer | white on it: 15.05:1 (British Paints Pansy Paradise hue, darkened) |

Source: teals from the live heartsinaction.com.au homepage (2026-08-14); purple from British Paints Pansy Paradise rgb(72,76,117) at 18% lightness (Matt, 2026-08-23). Header: --ink block with white nav text and a white Follow button; three-bar menu under 860px.

## Logo

Masters in Logo/ (not in the build, never edit): 1logo_header_reversed.svg (lockup for the dark header, 3240x496, transparent) and disability_unfiltered_logo_square_1.png (3000px square, white background). Other files in Logo/ are alternates or superseded Disability Stories masters. In use: src/assets/logo-lockup.svg (copy of the reversed lockup, 50px tall in the header, 40px on phones); favicon-32.png, apple-touch-icon.png and og-image.png are resized from the square PNG. The square PNG has a solid white background, so it only ever sits on white. Regenerate the derived files if a master changes.

Sponsor logo (homepage sponsor strip): src/assets/sponsor-hearts-in-action-{300,450,600,900}.png, served via srcset at 1x/1.5x/2x/3x, shown 300px wide max, linking to heartsinaction.com.au. Master: hearts-in-action-horizontal-small.svg (stroke-thickened small lockup) in Documents\Hearts In Action\Logo & Social Media\Logo - Redone. Regenerate: render the SVG at 2400px (headless Chrome, transparent), Lanczos-downscale to each width, unsharp-mask the 300/450/600 (percent 110/70/50, radius 1).

## Type

DM Sans (Google Fonts), matching the HIA footer. Weights 400/500/700. No thin weights, generous sizes (body 17px).

## Voice

Official description (Matt, 2026-08-14): "Disability Unfiltered is a podcast sharing real conversations from across the disability community. We speak with people with disability, families, support workers, providers and others with lived or professional experience. We explore the stories, challenges, ideas and people shaping disability support in Australia, while also seeking out inspiring stories of resilience, achievement and positive change. Our goal is to create honest conversations that inform, connect and give people a stronger voice."

Register: fact-forward, direct, warm through specifics not sentiment. Guests are experts on their own lives.
Banned in UI copy: "brave", "overcame", "despite", "special". Say "Follow", never "Subscribe".

## Imagery (when photos arrive)

Real guests, named, photographed as experts. Never stock. Banned: victory poses, finish-line shots, standing-next-to-the-wheelchair framing, soft-focus uplift. Most disabilities are invisible; imagery should reflect that. Full rationale: docs/design-brief.md.
