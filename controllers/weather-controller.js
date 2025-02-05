const axios = require('axios');

exports.fetchWeather = (req, res, next) => {
  const { lat, lon } = req.query;
  const currentWeatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;
  const forecastData = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;

  if (!lat || !lon) {
    return res.status(400).send('Error: Latitude and Longitude are required');
  }

  Promise.all([
    axios.get(currentWeatherData),
    axios.get(forecastData)
  ]).then(([
    currentWeatherResponse,
    forecastResponse
  ]) => {
    res.json({
      currentWeather: currentWeatherResponse.data,
      forecast: forecastResponse.data
    });
  }).catch(error => {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Error: Unable to fetch weather data from OpenWeatherMap API');
  });
}