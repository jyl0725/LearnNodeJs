const request = require('request');
require('dotenv').load();
const key = process.env.MY_API_KEY;

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=%2011%20broadway%20new%20york&key=${key}`,
  json: true
},(error, response, body) => {
  console.log(body);
});
