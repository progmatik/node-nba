import ModeleRankingTeam from './modele/modele_team.js';
import requestURI from './modele/nbaURI.js';
import ControllerRankingTeam from './controller/controller_equipe.js';
var express = require('express');
var path = require('path');
var app = express();
/**
 * Send Standing
 * @public
 * @param {Object} datas
 * @param {Number} Index of the conference Standing In the response 
 * array 4 for East and 5 for West
 *
 * @return {Array} teamsInstance
 */
const sendStanding = (datas, index) => {
  // Initialise Team Instance Variable with Controller Team Data 
  const teamsCollection = datas.body.resultSets[index].rowSet.map((team, index) => {
    const propsTeam = {
      idTeam: team[0],
      leagueID: team[1],
      seasonID: team[2],
      standingsDate: team[3],
      conference: team[4],
      team: team[5],
      numberGamePlayed: team[6],
      numberGameWon: team[7],
      numberGameLoose: team[8],
      percentageWin: team[9],
      homeRecord: team[10],
      roadRecord: team[11]
    };
    // Instanciate the Modele Data to populate and send it
    const controllerRankingTeam = new ControllerRankingTeam(propsTeam);
    return controllerRankingTeam;
  })  
  return teamsCollection;
};
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  next();
});

app.get('/controller/equipe', function(req, res) {
  // Instanciate The Api Call
  const modeleRankingTeam = Object.create(ModeleRankingTeam('06/26/26'));
  modeleRankingTeam.callNbaStanding(requestURI.URI.standing, requestURI.requestOptions)
    .then(resu => { 
      const conferenceEastStanding = sendStanding(resu, 4);
      const conferenceWestStanding = sendStanding(resu, 5); 
      const standings = [conferenceEastStanding, conferenceWestStanding];
      res.send(standings);
    })
    .catch(err => res.send(err))
});

app.listen(8080);
