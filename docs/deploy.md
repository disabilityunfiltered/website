# Deploy

All accounts use hello@disabilityunfiltered.com.au. NEVER use the seoraptorio GitHub account or the HIA Emailer Render workspace (matt@heartsinaction.com.au, the one connected to Claude's Render MCP) for this project.

## GitHub

- https://github.com/disabilityunfiltered/website (public), branch main. Local pushes use the repo-level credential store (.git/credentials, classic PAT created 2026-08-14, expires ~2026-11-12; renew with a new repo-scope PAT on the disabilityunfiltered account).
- Repo git identity: Disability Unfiltered <hello@disabilityunfiltered.com.au>.

## Render (hosting)

- Static site `disability-stories` (srv-da3sts8ae00c7395hokg), "My project" / Production, hello@ account. Build `npm install; npm run build`, publish `_site`. Fallback URL https://disability-stories-7ggs.onrender.com (changes if the service is renamed; the custom domain does not depend on it).
- Source is the Render GitHub App installed on the disabilityunfiltered account (website repo only). Every push to main auto-deploys within about a minute. If one does not: check github.com/settings/installations, or Manual Deploy > Deploy latest commit.
- Custom domains disabilityunfiltered.com.au (primary) and www (redirects to root), certificate issued 2026-08-23.
- An older duplicate service on the original Render account still serves the site at disability-stories.onrender.com (srv-d9vdj67lk1mc738nb9bg). Retire it.

## DNS (Cloudflare, zone 0cbce0890016e00f61b013ec385845a3)

- Registrar ChemiCloud holds the domain only; never change anything there.
- NEVER modify or delete the Zoho records: MX mx/mx2/mx3.zoho.com.au and the Zoho TXT records (SPF, DKIM, DMARC, verification).
- Site: root A 216.24.57.1 and www CNAME -> disabilityunfiltered.com.au, both DNS only (grey cloud) so Render manages the certificate. No AAAA.
- Resend (sending): TXT resend._domainkey (DKIM), MX send -> feedback-smtp.ap-northeast-1.amazonses.com (10), TXT send "v=spf1 include:amazonses.com ~all". All DNS only. Resend's optional inbound MX on the root was NOT added; it would conflict with Zoho.
- subscribe.disabilityunfiltered.com.au is managed by the Worker custom domain below; do not edit by hand.
- Leftover ChemiCloud cPanel records (A 51.161.174.19 for cpanel, webmail, whm, autoconfig, autodiscover, cpcalendars, cpcontacts, webdisk; CNAME ftp, mail; SRV/TXT caldav, carddav, _autodiscover) are unused and can be deleted.

## Email signup (Resend + Cloudflare Worker)

- Resend account (hello@, signed in via GitHub): domain disabilityunfiltered.com.au verified 2026-08-23, region Tokyo. Subscribers land in Audience > segment "General" (id 680261d9-7d47-4431-90a1-7ad3154b158b). Episode announcements are Resend Broadcasts to that segment (manual until the Phase 2 automation).
- Worker `disability-unfiltered-subscribe`, code in workers/subscribe/, served at https://subscribe.disabilityunfiltered.com.au. It validates the address, drops bots via the hidden `website` field, creates the contact, and sends a plain-text welcome from "Disability Unfiltered <hello@...>" (reply-to hello@). Duplicates return ok without a second welcome.
- Config in workers/subscribe/wrangler.toml (SITE_URL, RESEND_SEGMENT_ID, FROM_ADDRESS, REPLY_TO). Secret RESEND_API_KEY (Resend key, Full access) is set ONLY in the Cloudflare dashboard: Worker > Settings > Variables and Secrets > Deploy. Do not use `wrangler secret put` from Claude Code's `!` shell; it has no stdin and saves an empty value.
- Deploy code changes: `cd workers/subscribe && npx wrangler deploy` (needs `npx wrangler login` once per machine). After a dashboard secret edit, run deploy again before any further wrangler secret commands.
- Test: POST JSON {"email":"..."} with Accept: application/json to the Worker; expect {"status":"ok"} and a Delivered row in Resend > Emails. Site form: src/_includes/components/subscribe-form.njk, posts to site.subscribeUrl; no-JS fallback redirects back to /follow/?subscribe=ok|invalid|error#email.
