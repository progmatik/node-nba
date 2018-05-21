import ModeleRankingTeam from './src/modele/modele_team.js';
import requestURI from './src/modele/nbaURI.js';
import ControllerRankingTeam from './src/controller/controller_equipe.js';
var express = require('express');
var bodyParser = require('body-parser');
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
  // Instanciate The Api Call
  try {
    const modeleRankingTeam = Object.create(ModeleRankingTeam());
    const NBA_STATS_URL = `${requestURI.URI.standing}${req.body.date}`;
    const resu = await modeleRankingTeam.callNbaStanding(NBA_STATS_URL, requestURI.requestOptions);
    const conferenceEastStanding = sendStanding(resu, 4);
    const conferenceWestStanding = sendStanding(resu, 5); 
    const standings = [ 
      conferenceEastStanding, 
      conferenceWestStanding
    ];
    res.send(standings);
  } catch (e) {

    return e;
  }
});

app.listen(8080);
