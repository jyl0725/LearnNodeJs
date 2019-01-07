require('dotenv').load();
const yargs = require('yargs');
const geocode = require('./geocode/address');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  }else{
    console.log(results.address)
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
