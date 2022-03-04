import { NavLink } from 'react-router-dom';
import classes from './Teams.module.css';

let Teams = (props) => {
  if (props.teams.length === 0) {
    return (
      <div>
        <span>Запрашиваемые данные недоступны на этом тарифе.</span>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Список команд</h1>
        <div className={classes.teamMainBlock}>
          {props.teams.map((team) => (
            <div key={team.id}>
              <div>
                <span>
                  <div>
                    <NavLink
                      className={classes.link}
                      to={'/TeamCalendar/' + team.id}
                    >
                      <div className={classes.teamSecondBlock}>
                        <div>{team.name}</div>
                        <div>
                          <img src={team.crestUrl} alt='teamLogo' />
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Teams;
