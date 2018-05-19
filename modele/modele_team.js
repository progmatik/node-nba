import { HttpHelperInstance } from './httpHelper.js'

function ModeleRankingTeam(rankingDate) {
  return {
   /**
    * Call Nba Standing
    * @public
    * @param {String} url
    * @param {Object} options
    * @return {Promise}
    */
    callNbaStanding: async (url, options) => 
      await HttpHelperInstance.gotWrapper(url, options)
  }
}

export default ModeleRankingTeam;
