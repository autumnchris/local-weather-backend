# Local Weather Backend

A back-end Express.js server to call the relevant external APIs needed to run my front-end Local Weather App.

* [Local Weather App (React.js version)](https://github.com/autumnchris/local-weather-app-reactjs)
* [Local Weather App (vanilla JS version)](https://github.com/autumnchris/local-weather-app-vanilla-js)

---

## Built With
* [Express.js](https://expressjs.com)
* [Node.js](https://nodejs.org/en)
* JavaScript
* [OpenWeatherMap API](https://openweathermap.org)
* [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)
* [Axios](https://axios-http.com)
* [dotenv](https://github.com/motdotla/dotenv)
* [nodemon](https://nodemon.io)

## Demo

View project demo at [https://autumnchris-local-weather-backend.onrender.com](https://autumnchris-local-weather-backend.onrender.com).

## Instructions

After cloning and navigating to the repository in your command line, install the NPM packages.
```
npm install
```

Create a `.env` file in the root of the repository and add the following variables:
```
OPEN_WEATHER_API_KEY=<your-open-weather-map-api-key>
GEO_DB_API_KEY=<your-geodb-cities-api-key>
```

Run the following script in your command line if starting the repository in development mode.
```
npm run dev
```

Run the following script in your command line if starting the repository in production mode:
```
npm start
```

Go to `http://localhost:3000` in your browser.