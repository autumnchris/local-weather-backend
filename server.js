const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: ['https://autumnchris.github.io', 'http://localhost:8080'],
  methods: [ 'GET' ]
}));

app.use((req, res, next) => {
  res.status(400).send('404: Page not found');
});

app.listen(port, console.log(`Server is listening at port ${port}.`));