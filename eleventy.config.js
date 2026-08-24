export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css", "src/js": "js", "src/assets": "assets", "src/robots.txt": "robots.txt" });

  eleventyConfig.addCollection("episodes", (collectionApi) =>
    collectionApi.getFilteredByGlob("content/episodes/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Date(dateObj).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })
  );

  eleventyConfig.addFilter("isoDate", (dateObj) => new Date(dateObj).toISOString().slice(0, 10));

  // "1:02:30" or "12:30" -> seconds, for YouTube chapter links
  eleventyConfig.addFilter("toSeconds", (t) =>
    String(t).split(":").reduce((acc, part) => acc * 60 + Number(part), 0)
  );

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      data: "src/_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
