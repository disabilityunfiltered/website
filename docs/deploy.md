# Deploy

## Accounts (all under hello@disabilityunfiltered.com.au)

- GitHub: account `disabilityunfiltered` (created by Matt 2026-08-14). NEVER use the seoraptorio account for this project.
- Render: Matt's account logged in with hello@. The HIA Emailer Render workspace (matt@heartsinaction.com.au, connected to Claude's Render MCP) is a DIFFERENT account; do not deploy this site there.

## GitHub repo

- https://github.com/disabilityunfiltered/website (public). Pushes authenticate via a repo-local credential store (.git/credentials, 90-day classic PAT created 2026-08-14, expires ~2026-11-12). To renew: generate a new classic PAT with repo scope on the disabilityunfiltered account and replace the token in .git/credentials.

## Render static site (current service created 2026-08-21)

- Service: disability-stories (srv-da3sts8ae00c7395hokg), project "My project" / Production, on the hello@disabilityunfiltered.com.au Render account ("My Workspace"). Service name not yet renamed to match the brand.
- Live temp URL: https://disability-stories-7ggs.onrender.com (verified 2026-08-23, serving commit 5e5f81b).
- An older service on a different Render account still answers at https://disability-stories.onrender.com (srv-d9vdj67lk1mc738nb9bg, created 2026-08-14). It is not the one to use; retire it once the hello@ account is confirmed as the only home.
- Source: GitHub repo via hello@ credentials (Render still displays the pre-rename name DisabilityStories/website; GitHub redirects). Build: `npm install; npm run build`. Publish directory: `_site`. Branch main.
- Custom domains disabilityunfiltered.com.au (primary) and www (redirects to root) verified in Render 2026-08-23, certificate issued, site live on https://disabilityunfiltered.com.au. Render's A-record target: 216.24.57.1. If the service is renamed, its .onrender.com hostname changes; the A record and www CNAME -> root do not depend on it.
- Auto-Deploy is "On Commit" but DOES NOT FIRE: the service was created from a "Public Git Repository" URL, and no GitHub provider is connected to the Render workspace (Settings > Source > Edit shows "Connect Git provider"), so Render never receives push webhooks. Verified 2026-08-23: pushes b3aefe8 and d456480 were ignored. Until fixed, after every push: Render dashboard > service > Manual Deploy > Deploy latest commit.
- Fix (Matt, needs GitHub login as disabilityunfiltered): Settings > Source > Edit > GitHub > authorise the Render app for the disabilityunfiltered account > select disabilityunfiltered/website. This also clears the stale "DisabilityStories / website" label. A private Deploy Hook URL also exists under Settings > Deploy Hook (keep secret, never commit it).
- Custom domain connected only after Matt signs off on the temp URL.

## DNS (Cloudflare, hello@disabilityunfiltered.com.au account)

- Registrar ChemiCloud = domain only, never touch. DNS lives in Cloudflare Free (zone 0cbce0890016e00f61b013ec385845a3).
- NEVER modify/delete the Zoho records: 3x MX (mx/mx2/mx3.zoho.com.au) and the Zoho TXT records.
- Site records (set 2026-08-23): root A 216.24.57.1, DNS only (grey cloud); www CNAME -> disabilityunfiltered.com.au, DNS only. Keep both DNS only so Render manages the certificate. No AAAA.
- Leftover ChemiCloud cPanel records (A 51.161.174.19 for cpanel, webmail, whm, autoconfig, autodiscover, cpcalendars, cpcontacts, webdisk; CNAME ftp, mail; SRV/TXT caldav, carddav, _autodiscover) are unused and can be deleted when convenient.
