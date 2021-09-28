const getRSSFeed = require("./rss-parser");
  
const podcastProcessor = async sort =>{
    try {
        const rssSource =
          "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
          const rss =await getRSSFeed(rssSource);
          
        // check if rss has got result back if so then we destructure it and take the title description and items
        if(rss){
            const {title,description,items}=rss;

            // take out ten episodes from item
            let tenEpisodes =items.slice(0,10);

            return tenEpisodes;
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { podcastProcessor };