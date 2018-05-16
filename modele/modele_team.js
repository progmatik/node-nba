import {HttpHelperInstance} from './httpHelper.js'
function ModeleRankingTeam(rankingDate) {
//  const httpHelper = Object.create(HttpHelper());
  return {
   /**
    * Call Nba Standing
    * @public
    * @param {String} url
    * @param {Object} options
    * @return {Promise}
    */
    callNbaStanding: (url, options) => 
      HttpHelperInstance.gotWrapper(url, options)
  }
}

export default ModeleRankingTeam;
