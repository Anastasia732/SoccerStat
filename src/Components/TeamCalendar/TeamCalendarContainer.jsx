import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamCalendar from './TeamCalendar';
import { getMatchesForTeam } from '../api/api';
import { setMatchesForTeamAC } from '../Redux/ActionCreaters/ActionCreaters';

class TeamsCalendarContainer extends React.Component {
  componentDidMount() {
    let matchId = this.props.match.params.matchId;
    getMatchesForTeam(
      matchId,
      this.props.currentPage,
      this.props.pageSize
    ).then((responce) => {
      this.props.setMatches(responce.data.matches);
    });
  }

  render() {
    return <TeamCalendar teamMatches={this.props.teamMatches} />;
  }
}

let mapStateToProps = (state) => {
  return {
    teamMatches: state.TeamCalendarPage.teamMatches,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setMatches: (teamMatches) => {
      dispatch(setMatchesForTeamAC(teamMatches));
    },
  };
};

let TeamsCalendarContainerComponentWithUrl = withRouter(TeamsCalendarContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsCalendarContainerComponentWithUrl);
