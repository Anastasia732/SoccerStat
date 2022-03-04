export const SET_LEAGUES = 'SET_LEAGUES';

let initialState = {
  leagues: [],
};

const LeaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUES: {
      return { ...state, leagues: action.leagues };
    }

    default:
      return state;
  }
};

export default LeaguesReducer;
