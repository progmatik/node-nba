import chai from 'chai';
import ModeleRankingTeam from '../modele/modele_team.js';
import ControllerRankingTeam from '../controller/controller_equipe.js';
import requestURI from '../modele/nbaURI.js';
const expect = chai.expect;
chai.use(require('dirty-chai'));

/**
 * Call Nba Standing
 * Test Response
 */
describe('Call Nba Standing', () => {
  describe('When call nba standing is called', () => {
    it('should return nba standing', (done) => {
      const modeleRankingTeam = Object.create(ModeleRankingTeam());
      const NBA_STATS_URL = `${requestURI.URI.standing}06/26/2017`;
      modeleRankingTeam.callNbaStanding(NBA_STATS_URL, requestURI.requestOptions)
      .then((response) => {
        expect(response).to.be.an('object');
      })
      .catch(done);
      return done();
    });
  });
});
