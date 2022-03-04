import { connect } from 'react-redux';
import React from 'react';
import Leagues from './Leagues';
import { getLeagues } from '../api/api';
import { setLeaguesAC } from '../Redux/ActionCreaters/ActionCreaters';

class LeaguesContainer extends React.Component {
  componentDidMount() {
    getLeagues().then((responce) => {
      this.props.setLeagues(responce.data.competitions);
    });
  }

  render() {
    return <Leagues leagues={this.props.leagues} />;
  }
}

let mapStateToProps = (state) => {
  return {
    leagues: state.LeaguesPage.leagues,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setLeagues: (leagues) => {
      dispatch(setLeaguesAC(leagues));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesContainer);
