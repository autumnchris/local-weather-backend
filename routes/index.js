const express = require('express');
const weatherController = require('../controllers/weather-controller');
const citiesController = require('../controllers/cities-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`
    <h1>Instructions</h1>
    <p>To get weather data, route to <code>https://autumnchris-local-weather-backend.onrender.com/weather?lat=&lt;your-latitude&gt;&lon=&lt;your-longitude&gt;</code>.</p>
    <p>To get cities data, route to <code>https://autumnchris-local-weather-backend.onrender.com/cities?searchInput=&lt;your-city-search-input&gt;</code>.</p>
  `);
});

router.get('/weather', weatherController.fetchWeather);

router.get('/cities', citiesController.fetchCities);

module.exports = router;