# Local Weather Backend

---

## Built With
* [Express.js](https://expressjs.com)
* [Node.js](https://nodejs.org/en)
* JavaScript
* [Axios](https://axios-http.com)
* [dotenv](https://github.com/motdotla/dotenv)
* [nodemon](https://nodemon.io)

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