import React from 'react';
import { connect } from 'react-redux';
import Teams from './Teams';
import { withRouter } from 'react-router-dom';
import { getAllTeams } from '../api/api';
import { setTeamsAC } from '../Redux/ActionCreaters/ActionCreaters';

class TeamsContainer extends React.Component {
  componentDidMount() {
    getAllTeams().then((responce) => {
      this.props.setTeams(responce.data.teams);
    });
  }

  render() {
    return <Teams teams={this.props.teams} />;
  }
}

let mapStateToProps = (state) => {
  return {
    teams: state.TeamsPage.teams,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setTeams: (teams) => {
      dispatch(setTeamsAC(teams));
    },
  };
};

let TeamsContainerComponentWithUrl = withRouter(TeamsContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsContainerComponentWithUrl);
