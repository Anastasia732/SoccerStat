import { NavLink } from 'react-router-dom';
import classes from './Leagues.module.css';
import React from 'react';

class Leagues extends React.Component {
  constructor(props) {
    super(props);
    this.state = { leagues: this.props.leagues };
    this.filterList = this.filterList.bind(this);
  }

  filterList(e) {
    var filteredList = this.props.leagues.filter(function (item) {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ leagues: filteredList });
  }

  render() {
    return (
      <div className={classes.main}>
        <input placeholder='Поиск' onChange={this.filterList} />
        <h1>Список лиг</h1>
        <div className={classes.mainBlock}>
          {this.state.leagues.map((league) => (
            <div key={league.id}>
              <NavLink to={'/LeagueCalendar/' + league.id}>
                <div className={classes.secondBlock}>
                  <div>{league.name} </div>
                  <div>{league.area.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Leagues;
