let URI = {
  standing: "http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate="
};

const requestOptions = {
  headers: {
    "accept-encoding": "Accepflate, sdch",
    "accept-language": "he-IL,he;q=0.8,en-US;q=0.6,en;q=0.4",
    "cache-control": "max-age=0",
    connection: "keep-alive",
    host: "stats.nba.com",
    // referer: "http://stats.nba.com/",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"
  },
  json: true
};

export default {URI, requestOptions};
