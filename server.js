'use strict';
const express = require('express');

const config = require('./config');
const routes = require('./src/controllers');

const app = express();

app.on('error', error => console.log(error));
app.use('/', routes);


const server = app.listen(config.port, console.log(`Server is listening on port ${config.port}`));

process.on('SIGINT', () => {
  console.log('Stopping server.');
  server.close(() => {
    console.log('Server stopped.');
  });
});

