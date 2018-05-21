import got from 'got';

function ModeleRankingTeam() {
  return {
    /**
     * Call Nba Standing
     * @public
     * @param {String} url
     * @param {Object} options
     * @return {Promise}
     */
    callNbaStanding: async (url, options) =>
      got(url, options),
  };
}

export default ModeleRankingTeam;
