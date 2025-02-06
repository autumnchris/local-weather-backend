const axios = require('axios');

exports.fetchCities = (req, res, next) => {
  const { searchInput } = req.query;
  const citiesData = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=20000&namePrefix=${searchInput}`;
  const options = {
    method: 'GET',
    url: citiesData,
    headers: {
      'X-RapidAPI-Key': process.env.GEO_DB_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  if (!searchInput) {
    return res.status(400).send('Error: A search input of a city name is required');
  }

  axios.request(options)
    .then(citiesResponse => {
      res.json({
        cities: citiesResponse.data
      });
    }).catch(error => {
      console.error('Error fetching city data:', error);
      res.status(500).send('Error: Unable to fetch city data from GeoDB Cities API');
    });
}