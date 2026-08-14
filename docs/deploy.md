# Deploy

## Accounts (all under hello@disabilitystories.com.au)

- GitHub: account `disabilitystories` (created by Matt 2026-08-14). NEVER use the seoraptorio account for this project.
- Render: Matt's account logged in with hello@. The HIA Emailer Render workspace (matt@heartsinaction.com.au, connected to Claude's Render MCP) is a DIFFERENT account; do not deploy this site there.

## GitHub repo

- https://github.com/DisabilityStories/website (public). Pushes authenticate via a repo-local credential store (.git/credentials, 90-day classic PAT created 2026-08-14, expires ~2026-11-12). To renew: generate a new classic PAT with repo scope on the DisabilityStories account and replace the token in .git/credentials.

## Render static site (deployed 2026-08-14)

- Service: disability-stories (srv-d9vdj67lk1mc738nb9bg), project "My project" / Production, on the hello@ Render account ("My Workspace").
- Live temp URL: https://disability-stories.onrender.com
- Source: Public Git Repository (no GitHub OAuth). Build: `npm install; npm run build`. Publish directory: `_site`. Branch main.
- IMPORTANT: no auto-deploy. After pushing to GitHub, trigger a deploy manually: Render dashboard > disability-stories > Manual Deploy, or set up a Deploy Hook (Settings > Deploy Hook) and curl it.
- Custom domain connected only after Matt signs off on the temp URL.

## DNS (Cloudflare, Matt's account, only he has login)

- Registrar ChemiCloud = domain only, never touch. DNS lives in Cloudflare Free; nameservers rosalie/vin.ns.cloudflare.com.
- NEVER modify/delete the Zoho records: 3x MX (mx/mx2/mx3.zoho.com.au), TXT SPF, TXT zmail._domainkey, TXT _dmarc, TXT zoho-verification.
- To connect the domain (final step): in Render add disabilitystories.com.au + www; in Cloudflare add CNAME @ -> [site].onrender.com and CNAME www -> same, both DNS only (grey cloud) until the certificate issues; SSL/TLS mode Full; no AAAA. Render may also show a TXT verification record; it is additive and safe. Matt enters these himself.
