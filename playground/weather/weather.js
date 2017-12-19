const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/0f57df8aba49b688b3621f2c46366411/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('No se puede conectar al servidor DarkSky');
    } else if (response.statusCode === 400) {
      callback('No se puede obtener el clima');
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('No se puede obtener el clima');
    }
  });
};

module.exports.getWeather = getWeather;
