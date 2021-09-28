const RSSParser = require('rss-parser');

const parser = new RSSParser();

// This function uses the rss-parser library to fetch the url that's passed
// and return a javascript object. 
// For more info see - https://github.com/rbren/rss-parser#readme
function getRSSFeed(rss_url) {
    try {
        return parser.parseURL(rss_url);
    } catch(error) {
        console.log('Error:', error.message)
    }
}

module.exports = getRSSFeed
