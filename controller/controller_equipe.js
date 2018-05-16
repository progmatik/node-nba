import ModeleRankingTeam from '../modele/modele_team.js';
// Constructor Function For the controller Ranking Team
function ControllerRankingTeam({
  idTeam,
  nameTeam,
  numberGamePlayed,
  numberGameWon,
  numberGameLoose,
  percentageWin,
  resultGameHome,
  resultGameAway,
}) {
  this.idTeam;
  this.nameTeam;
  this.numberGamePlayed;
  this.numberGameWon;
  this.numberGameLoose;
  this.percentageWin;
  this.resultGameHome;
  this.resultGameAway;
  this.date = '06/25/2017'; 
  
};

ControllerRankingTeam.prototype.getRankingData = function() {
  const modeleRankingTeam = Object.create(ModeleRankingTeam(this.date));
  modeleRankingTeam.callNbaRankingData()
    .then(result => result)
    .catch(err => err)
};
