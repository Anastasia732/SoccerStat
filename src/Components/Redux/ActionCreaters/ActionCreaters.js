import { SET_MATHES } from '../LeagueCalendarReducer';
import { SET_LEAGUES } from '../LeaguesReducer';
import { SET_MATCHES_FOR_TEAM } from '../TeamCalendarReducer';
import { SET_TEAMS } from '../TeamsReducer';

export const setMatchesAC = (matches) => ({ type: SET_MATHES, matches });
export const setLeaguesAC = (leagues) => ({ type: SET_LEAGUES, leagues });
export const setMatchesForTeamAC = (teamMatches) => ({
  type: SET_MATCHES_FOR_TEAM,
  teamMatches,
});
export const setTeamsAC = (teams) => ({ type: SET_TEAMS, teams });
