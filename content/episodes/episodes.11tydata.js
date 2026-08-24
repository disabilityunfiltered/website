// Applies to every file in content/episodes/. An episode file needs no
// layout or permalink of its own: drop in the Markdown, the site does the rest.
export default {
  layout: "layouts/episode.njk",
  permalink: "/episodes/{{ page.fileSlug }}/"
};
