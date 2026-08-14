export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css", "src/assets": "assets", "src/robots.txt": "robots.txt" });

  eleventyConfig.addCollection("episodes", (collectionApi) =>
    collectionApi.getFilteredByGlob("content/episodes/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Date(dateObj).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })
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
