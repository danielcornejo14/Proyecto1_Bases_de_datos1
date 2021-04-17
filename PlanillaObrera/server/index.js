const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('./_helpers/basic-auth');
const errorHandler = require('./_helpers/error-handler');
const readCatalogs = require('./database/readXml.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use basic HTTP auth to secure the api
app.use(basicAuth);

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/db', require('./database/database.controller'));

// global error handler
app.use(errorHandler);

//read Catalogs and no-Catalogs
readCatalogs.readCatalogs();
readCatalogs.readNonCatalogs();

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});