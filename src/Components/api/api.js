import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '506bca27c6bd45f992a823d4ad38acbc',
  },
});

export const getTeams = (teamId) => {
  return instance.get(`competitions/${teamId}/teams`);
};

export const getLeagues = () => {
  return instance.get(`competitions/`);
};

export const getMatches = (leagueId) => {
  return instance.get(`competitions/${leagueId}/matches`);
};

export const getMatchesForTeam = (matchId) => {
  return instance.get(`teams/${matchId}/matches`);
};

export const getAllTeams = () => {
  return instance.get(`teams`);
};
