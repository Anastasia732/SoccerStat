export const SET_TEAMS = 'SET_TEAMS';

let initialState = {
  teams: [],
};

const TeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS: {
      return { ...state, teams: action.teams };
    }

    default:
      return state;
  }
};

export default TeamsReducer;
