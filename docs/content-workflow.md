# Content workflow: publishing an episode

Adding an episode touches ONLY content/episodes/. One Markdown file = one episode page at /episodes/[file-name]/, a card on /episodes/ and a slot in the home page reel. Layout and URL come from content/episodes/episodes.11tydata.js; the page itself is src/_includes/layouts/episode.njk + src/css/episode.css.

## Steps

1. Upload the audio to the podcast host (docs/deploy.md lists the account). Copy the episode's MP3 URL.
2. Upload the video to YouTube. Copy the 11-character video ID from the URL (watch?v=THIS).
3. Once the directories have picked it up, copy the episode links from Apple Podcasts and Spotify (optional; without them the page falls back to the show-level links in src/_data/site.js).
4. Create content/episodes/NN-short-slug.md using the model below. The file name becomes the URL, so keep it short and lower-case with hyphens. Never rename a published file: it breaks the link.
5. Paste the transcript under the front matter. Plain Markdown; bold the speaker name (**Matt:**).
6. Commit and push to main. Render rebuilds and deploys (docs/deploy.md).

## Episode file model

```
---
title: Episode title
episodeNumber: 12
guest: Guest name
guestBio: One paragraph about the guest, in plain language.
guestPhoto: /assets/guests/guest-name.jpg     # optional, square, 320px or larger
guestPhotoAlt: Guest name smiling at the camera   # optional, defaults to the name
date: 2026-09-01
summary: Two or three plain-language sentences on what the conversation covers.
duration: 42 min
youtubeId: dQw4w9WgXcQ
audioUrl: https://host.example/path/episode-12.mp3
listen:
  apple: https://podcasts.apple.com/au/podcast/...
  spotify: https://open.spotify.com/episode/...
chapters:
  - time: "00:00"
    title: Welcome
  - time: "12:30"
    title: The NDIS conversation
---
**Matt:** Welcome to the show.

**Guest:** Thanks for having me.
```

Required: title, date. Everything else is optional and its section disappears when empty. Missing transcript shows a "being prepared" note, but a transcript is a launch requirement (CLAUDE.md rule 4): do not publish without one. Chapter times are "mm:ss" or "h:mm:ss" and link to that moment on YouTube when youtubeId is set.

## Host independence

The site never stores media. audioUrl, youtubeId and listen.* are plain URLs, so changing podcast host (Spotify for Creators, Transistor, Buzzsprout, anything) means new audioUrl values in the episode files and new show links in src/_data/site.js. No template changes.

## Not yet built

Automatic announcement email on new episode (PLAN.md Phase 2), per-episode share images and JSON-LD (Phase 3).
