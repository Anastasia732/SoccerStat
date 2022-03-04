import classes from './LeagueCalendar.module.css';

let LeagueCalendar = (props) => {
  if (props.matches.length === 0) {
    return (
      <div>
        <span>Запрашиваемые данные недоступны на этом тарифе.</span>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Матчи</h1>
        {props.matches.map((match) => (
          <div key={match.id}>
            <div>
              <span>
                {' '}
                <div>
                  <table className={classes.table}>
                    <tr>
                      <td>{match.utcDate}</td>
                      <td>{match.status}</td>
                      <td>{match.homeTeam.name}</td>
                      <td>-</td>
                      <td>{match.awayTeam.name}</td>
                      <td>
                        {match.score.fullTime.homeTeam}-
                        {match.score.fullTime.awayTeam}
                      </td>
                      <td>
                        {match.score.extraTime.homeTeam} -{' '}
                        {match.score.extraTime.awayTeam}
                      </td>
                      <td>
                        {match.score.penalties.homeTeam} -{' '}
                        {match.score.penalties.awayTeam}
                      </td>
                    </tr>
                  </table>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default LeagueCalendar;
