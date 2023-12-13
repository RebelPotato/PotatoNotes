const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    // csseleventy
    eleventyConfig.addPassthroughCopy("_src/css");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // set custom time formatting
    eleventyConfig.addFilter('toDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate();
    })
    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "_src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};