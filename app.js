const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
require('dotenv').config();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(expressLayouts);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(cors({
  origin: ['https://autumnchris.github.io', 'http://localhost:8080'],
  methods: [ 'GET' ]
}));

app.use(express.static(`${__dirname}/public`));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use((req, res, next) => {
  res.status(404).render('404', {title: 'Page not found'});
});

app.listen(port, console.log(`Server is listening at port ${port}.`));