const express = require("express");
const app = express();
const port = 3000;

const { podcastProcessor } = require("./utilities/podcast-processor");
app.get("/", async (req, res) => {
  try {
    const result = await podcastProcessor();
    return res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/sort", async (req, res) => {
  const { order } = req.query;
  const result = await podcastProcessor(order);
  return res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
