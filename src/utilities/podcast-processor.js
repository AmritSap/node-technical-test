const getRSSFeed = require("./rss-parser");
  
const podcastProcessor = async sort =>{
    try {
        const rssSource =
          "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
          const rss =await getRSSFeed(rssSource);
          return rss;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { podcastProcessor };