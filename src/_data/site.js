// Single source of truth for site-wide facts. Fill in a URL and the
// matching icon/badge appears everywhere automatically; null = hidden.
export default {
  name: "Disability Unfiltered",
  url: "https://disabilityunfiltered.com.au",
  email: "hello@disabilityunfiltered.com.au",
  subscribeUrl: "https://subscribe.disabilityunfiltered.com.au", // Cloudflare Worker in workers/subscribe
  description:
    "A podcast sharing real conversations from across the disability community in Australia. People with disability, families, support workers and providers on the stories, challenges and ideas shaping disability support.",
  tagline: "Real conversations from across the disability community.",
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    youtube: null
  },
  listen: {
    apple: null,
    spotify: null,
    youtube: null
  }
};
