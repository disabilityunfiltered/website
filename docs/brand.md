# Brand

## Colours (tokens.css is the only place these hexes exist in code)

| Token | Hex | Use | Contrast rule |
|-------|-----|-----|---------------|
| --ground | #F9F7F3 | Page background | |
| --ink | #1A3A42 | Headings, nav, primary buttons | 11.3:1 on ground |
| --text | #33424A | Body text | 9+:1 on ground |
| --teal | #5A9CA6 | Decoration, borders, large fills ONLY | 2.9:1 - NEVER text on light |
| --teal-strong | #3A6E77 | Links, hovers, interactive | 5.34:1 on ground, 5.03:1 on tint (AA; darkened from HIA's #3F7680, which failed on tint at 4.49:1) |
| --teal-soft | #8FC1C9 | Tints, eyebrows on dark | 5.83:1 on purple |
| --tint | #EAF2F3 | Alternating section wash | |
| --purple | #343755 | Footer, header bars, header Follow button | white on it: 11.5:1 (British Paints Pansy Paradise #484C75 darkened to 27% lightness at Matt's request, 2026-08-23) |

Source: teals verified against live heartsinaction.com.au 2026-08-14 (homepage inline styles); purple derived 2026-08-23 from the Pansy Paradise swatch rgb(72,76,117) at britishpaints.com.au/colours/colour-chart/purples/pansy-paradise/, same hue and saturation, darker.

## Logo

Masters in Logo/ (NOT in the build, never edit): logo_header_4.svg (horizontal lockup, 3240x496, transparent background) and disability_unfiltered_logo_square_1.png (3000px square, white background). Older Disability Stories masters in the same folder are superseded. In use: src/assets/logo-lockup.svg is the header logo, sitting on a white pill (.logo-chip) because its purple lettering has no contrast on the dark teal band; favicon-32.png, apple-touch-icon.png and og-image.png are generated from the PNG master. The square PNG's background is solid white, so anywhere it appears it sits on a white card, never directly on teal or purple. Regenerate derived sizes from the masters if the logo changes.

## Type

DM Sans (Google Fonts), matching the HIA footer. Weights 400/500/700. No thin weights, generous sizes (body 17px).

## Voice

Official description (Matt, 2026-08-14): "Disability Unfiltered is a podcast sharing real conversations from across the disability community. We speak with people with disability, families, support workers, providers and others with lived or professional experience. We explore the stories, challenges, ideas and people shaping disability support in Australia, while also seeking out inspiring stories of resilience, achievement and positive change. Our goal is to create honest conversations that inform, connect and give people a stronger voice."

Register: fact-forward, direct, warm through specifics not sentiment. Guests are experts on their own lives.
Banned in UI copy: "brave", "overcame", "despite", "special". Say "Follow", never "Subscribe".

## Imagery (when photos arrive)

Real guests, named, photographed as experts. Never stock. Banned: victory poses, finish-line shots, standing-next-to-the-wheelchair framing, soft-focus uplift. Most disabilities are invisible; imagery should reflect that. Full rationale: docs/design-brief.md.
