# Deploy

## Accounts (all under hello@disabilitystories.com.au)

- GitHub: account `disabilitystories` (created by Matt 2026-08-14). NEVER use the seoraptorio account for this project.
- Render: Matt's account logged in with hello@. The HIA Emailer Render workspace (matt@heartsinaction.com.au, connected to Claude's Render MCP) is a DIFFERENT account; do not deploy this site there.

## Render static site

- Type: Static Site (free tier). Build command: `npm install && npx @11ty/eleventy`. Publish directory: `_site`.
- Deploys from the GitHub repo (fill in repo URL once created).
- Temporary URL: (fill in once created). Custom domain connected only after Matt signs off on the temp URL.

## DNS (Cloudflare, Matt's account, only he has login)

- Registrar ChemiCloud = domain only, never touch. DNS lives in Cloudflare Free; nameservers rosalie/vin.ns.cloudflare.com.
- NEVER modify/delete the Zoho records: 3x MX (mx/mx2/mx3.zoho.com.au), TXT SPF, TXT zmail._domainkey, TXT _dmarc, TXT zoho-verification.
- To connect the domain (final step): in Render add disabilitystories.com.au + www; in Cloudflare add CNAME @ -> [site].onrender.com and CNAME www -> same, both DNS only (grey cloud) until the certificate issues; SSL/TLS mode Full; no AAAA. Render may also show a TXT verification record; it is additive and safe. Matt enters these himself.
