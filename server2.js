import ModeleRankingTeam from './modele/modele_team.js';
import requestURI from './modele/nbaURI.js';
var express = require('express');
var path = require('path');
var app = express();
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  next();
});

app.get('/controller/equipe', function(req, res) {
  const modeleRankingTeam = Object.create(ModeleRankingTeam('06/26/26'));
  modeleRankingTeam.callNbaStanding(requestURI.URI.standing, requestURI.requestOptions)
    .then(resu => res.send(resu.body))
    .catch(err => res.send(err))
});

app.listen(8080);
