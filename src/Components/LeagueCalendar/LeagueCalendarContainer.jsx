import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeagueCalendar from './LeagueCalendar';
import { getMatches } from '../api/api';
import { setMatchesAC } from '../Redux/ActionCreaters/ActionCreaters';

class LeagueCalendarContainer extends React.Component {
  componentDidMount() {
    let leagueId = this.props.match.params.leagueId;
    getMatches(leagueId).then((responce) => {
      this.props.setMatches(responce.data.matches);
    });
  }

  render() {
    return <LeagueCalendar matches={this.props.matches} />;
  }
}

let mapStateToProps = (state) => {
  return {
    matches: state.LeagueCalendarPage.matches,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setMatches: (matches) => {
      dispatch(setMatchesAC(matches));
    },
  };
};

let LeagueCalendarContainerComponentWithUrl = withRouter(
  LeagueCalendarContainer
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueCalendarContainerComponentWithUrl);
