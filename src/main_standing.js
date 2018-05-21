import ModeleRankingTeam from './modele/modele_team';
import requestURI from './modele/nbaURI';
import ControllerRankingTeam from './controller/controller_equipe';

const sendStanding = (datas, index) => {
  // Initialise Team Instance Variable with Controller Team Data
  const teamsCollection = datas.body.resultSets[index].rowSet.map((team) => {
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
      roadRecord: team[11],
    };
    // Instanciate the Modele Data to populate and send it
    const controllerRankingTeam = new ControllerRankingTeam(propsTeam);
    return controllerRankingTeam;
  });
  return teamsCollection;
};

export default async function getNBAStandingByDate(nbaStandingDate) {
  const modeleRankingTeam = Object.create(ModeleRankingTeam());
  const NBA_STATS_URL = `${requestURI.URI.standing}${nbaStandingDate}`;
  const resu = await modeleRankingTeam.callNbaStanding(NBA_STATS_URL, requestURI.requestOptions);
  const conferenceEastStanding = sendStanding(resu, 4);
  const conferenceWestStanding = sendStanding(resu, 5);
  const standings = [
    conferenceEastStanding,
    conferenceWestStanding,
  ];

  return standings;
}
