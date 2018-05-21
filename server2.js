import getNBAStandingByDate from './src/main_standing.js';
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
/**
 *
 * Middleware
 *
 */
app.use(bodyParser.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  next();
});
/**
 * POST ROUTE
 * /controller/equipe
 * @return {Json} Collection of Conferences Standing
 *
 */
app.post('/controller/equipe', async function(req, res) {
  const standings = await getNBAStandingByDate(req.body.date);
  res.send(standings);
});

app.listen(8080);
