const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function (eleventyConfig) {
    // add syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);
    // set custom time formatting
    eleventyConfig.addFilter('toDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate();
    })
    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};