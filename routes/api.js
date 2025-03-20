const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather-controller');
const citiesController = require('../controllers/cities-controller');

router.get('/', (req, res, next) => {
  console.log('Rendering homepage...');
  res.render('index');
});

router.get('/weather', weatherController.fetchWeather);

router.get('/cities', citiesController.fetchCities);

module.exports = router;