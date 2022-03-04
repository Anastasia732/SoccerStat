export const SET_MATCHES_FOR_TEAM = 'SET_MATCHES_FOR_TEAM';

let initialState = {
  teamMatches: [],
};

const TeamCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES_FOR_TEAM: {
      return { ...state, teamMatches: action.teamMatches };
    }
    default:
      return state;
  }
};

export default TeamCalendarReducer;
