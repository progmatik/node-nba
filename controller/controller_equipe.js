// Constructor Function For the controller Ranking Team
export default function ControllerRankingTeam(args) {
  this.idTeam = args.idTeam;
  this.leagueID = args.leagueID;
  this.seasonID = args.seasonID;
  this.standingsDate = args.standingsDate; 
  this.conference = args.conference;
  this.team = args.team;
  this.numberGamePlayed = args.numberGamePlayed;
  this.numberGameWon = args.numberGameWon;
  this.numberGameLoose = args.numberGameLoose;
  this.percentageWin = args.percentageWin;
  this.homeRecord = args.homeRecord;
  this.roadRecord = args.roadRecord;
}

ControllerRankingTeam.prototype.getRankingData = function(standings) {

};
