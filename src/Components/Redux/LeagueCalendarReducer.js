export const SET_MATHES = 'SET_MATCHES';

let initialState = {
  matches: [],
};

const LeagueCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATHES: {
      return { ...state, matches: action.matches };
    }

    default:
      return state;
  }
};

export default LeagueCalendarReducer;
