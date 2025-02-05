const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Route to "/weather" to get weather data. Route to "/cities" to get city data.')
});

module.exports = router;