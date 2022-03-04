import { combineReducers, createStore } from 'redux';
import LeagueCalendarReducer from './LeagueCalendarReducer';

import LeaguesReducer from './LeaguesReducer';
import TeamCalendarReducer from './TeamCalendarReducer';
import TeamsReducer from './TeamsReducer';

let reducers = combineReducers({
  LeaguesPage: LeaguesReducer,
  TeamsPage: TeamsReducer,
  LeagueCalendarPage: LeagueCalendarReducer,
  TeamCalendarPage: TeamCalendarReducer,
});

let store = createStore(reducers);

export default store;
