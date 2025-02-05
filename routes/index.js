const express = require('express');
const weatherController = require('../controllers/weather-controller');
const citiesController = require('../controllers/cities-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Route to "/weather" to get weather data. Route to "/cities" to get city data.')
});

router.get('/weather', weatherController.fetchWeather);

router.get('/cities', citiesController.fetchCities);

module.exports = router;