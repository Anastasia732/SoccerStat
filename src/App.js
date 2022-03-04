import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import LeaguesContainer from './Components/Leagues/LeaguesContainer';
import TeamsContainer from './Components/Teams/TeamsContainer';
import LeagueCalendarContainer from './Components/LeagueCalendar/LeagueCalendarContainer';
import TeamCalendarContainer from './Components/TeamCalendar/TeamCalendarContainer';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className='App'>
      <Header />

      <div className='mainContent'>
        <Route exact path='/' component={() => <Main />} />
        <Route path='/Leagues' component={() => <LeaguesContainer />} />
        <Route
          path='/LeagueCalendar/:leagueId?'
          component={() => <LeagueCalendarContainer />}
        />
        <Route path='/Teams/:teamId?' component={() => <TeamsContainer />} />
        <Route
          path='/TeamCalendar/:matchId'
          component={() => <TeamCalendarContainer />}
        />
      </div>
    </div>
  );
}

export default App;
