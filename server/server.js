const express = require('express');
const util = require('util');
const request = require('request');
require('dotenv').config({ path: __dirname + '/./../.env' });
const app = express();

let port = process.env.PORT || 4000;
const get = util.promisify(request.get);
app.use(express.json());

console.log(process.env);
const BEARER_TOKEN = process.env.BEARER_TOKEN;

const tweetUrl = 'https://api.twitter.com/1.1/search/tweets.json';

app.post('/api/twitter', async (req, res) => {
  if (!BEARER_TOKEN) {
    res.status(400).send(res.body.error.message);
  }

  const { q } = req.body;
  const uri = encodeURIComponent(q);
  const token = BEARER_TOKEN;
  const requestConfig = {
    url: `${tweetUrl}?q=${uri}&result_type=popular`,
    auth: {
      bearer: token,
    },
    json: true,
  };

  try {
    const response = await get(requestConfig);
    if (response.statusCode === 200 || response.statusCode === 201) {
      res.send(response);
    } else {
      throw new Error(response);
    }
  } catch (e) {
    res.send(e);
  }
});
console.log('NODE_ENV is', process.env.NODE_ENV);

app.listen(port, () => console.log(`Listening on port ${port}`));
