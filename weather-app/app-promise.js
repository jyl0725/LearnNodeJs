require('dotenv').load();
const yargs = require('yargs');
const axios = require('axios')
const key = process.env.MY_API_KEY;
const weatherKey = process.env.WEATHER_KEY;

const argv = yargs
  .options({
  a:{
    describe: 'Address to fetch weather for',
    demand: true,
    alias: 'address',
    string: true
  }
  })
  .help()
  .alias('help', 'h')
  .argv;

  let encodedAddress = encodeURIComponent(argv.address);
  let gecodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`

  axios.get(gecodeURL)
  .then(response => {
    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('Unable to find that address.');
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;
    return axios.get(weatherUrl)
  }).then(response => {
    let temp = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It is ${temp}. It feels like ${apparentTemperature}`)
  })
  .catch(e =>{
    if(e.code === 'ENOTFOUND'){
      console.log('Unalbe to connect to API Server')
    }else{
      console.log(e.message);
    }
  })
