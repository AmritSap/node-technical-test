# NASA RSS Feed API Challenge

Hey potential SCA Developer! Thank you for taking this challenge to join our development team.

## Instructions for Candidate

This readme contains the goal of the challenge, requirements & some useful notes to assist you.

You will need to implement these requirements using this template. Feel free to reorganise the folder structure if required. You can use any external libraries as you see fit for this challenge.

This challenge should take no longer than a coupe of hours to complete & is here to assess your ability to:

- Implement the essential requirements
- Use Javascript and Node js
- Write functional and good quality code
- Push the results to some remote source control (like Git)

Please commit early and often, so that we can see how problems are solved. 

## Challenge

This is a challenge to code an API that returns the `Houston, We have a Podcast` RSS feed. Ideally the API should support various types of requests as detailed in the requirements below. The basics have already been set up.

### Steps

1. Read up on what RSS feeds if you are not familiar with the technology .
2. Go to the NASA's `Houston, We have a Podcast` RSS feed page located at `https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss`.
3. Use node or a third party library to retrieve the RSS feed in XML and convert it into a JSON object
5. With the JSON object build an API using Express with the requirements detailed in the next section.

## Requirements

- The root route should return the title of the podcast, the description of the podcast and an array of the first 10 episodes as they appear in the RSS feed. Each episode should contain the episode title, the audio url and the published date. The published date should be formatted into AEST (Australian Eastern Standard Time). So in summary the root route should return the following example payload:
  ```js
  {
    title: "Houston We Have a Podcast"
    description: "description of podcast"
    episodes: [
     {  
        title: "title of episode",
        audioUrl: "http://www.nasa.gov/sites/default/files/atoms/audio/ep191_the_crew-2_astronauts.mp3"
        publishedDate: "13/03/2021, 2:30:00 am AEST"
     }
     // 9 more episodes
    ]
  }
   ```
## Bonus Round!
This is not an essential requirement but is a nice to have:

- Create another endpoint `/sort`. This endpoint accepts a query parameter called `order`. The order can either be `asc` for ascending or `dsc` for descending.
  This endpoint should return the same payload as the root route, but the 10 episodes return are sorted by their published date according to the `order` query.
  So if the order query is `dsc`  the latest 10 episodes are returned and if the order query is `asc` then the first 10 episodes are returned.

## Getting Started

To get started with this application:

- From the repo root folder run

```js
  npm install
  npm start
```

## How we are going to test your API
- We start your API locally by running the following:

```js
  npm install
  npm start
```

- Using Postman we will make a GET request to the following URL:

```
  http://localhost:3000/
```

- If the bonus round has been completed will make the following GET requests:

```
  http://localhost:3000/sort?order=asc
  http://localhost:3000/sort?order=dsc
```
