const getRSSFeed = require("./rss-parser");
const { convertISODateToAEST } = require("./format-iso-date-to-AEST");

const podcastProcessor = async (sort) => {
  try {
    const rssSource =
      "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
    const rss = await getRSSFeed(rssSource);

    // check if rss has got result back if so then we destructure it and take the title description and items
    if (rss) {
      const { title, description, items } = rss;

      // take out ten episodes from item
      let tenEpisodes = items.slice(0, 10);

      const episodesInfo = tenEpisodes.map((item) => {
        return {
          title: item.title,
          audioUrl: item.enclosure.url,
          publishedDate: item.pubDate,
        };
      });

      let sorted = [];

      if (sort === "dsc") {
        sorted = episodesInfo.sort(
          (a, b) =>
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime()
        );
      } else if (sort === "asc") {
        sorted = episodesInfo.sort(
          (a, b) =>
            new Date(a.publishedDate).getTime() -
            new Date(b.publishedDate).getTime()
        );
      } else {
        sorted = episodesInfo;
      }
      const episodes = sorted.map((item) => {
        item.publishedDate = convertISODateToAEST(item.publishedDate);
        return item;
      });
      return episodes;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { podcastProcessor };
