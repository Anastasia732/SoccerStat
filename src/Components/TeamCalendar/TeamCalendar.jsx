import classes from './TeamCalendar.module.css';

let TeamCalendar = (props) => {
  if (props.teamMatches.length === 0) {
    return (
      <div>
        <span>Запрашиваемые данные недоступны на этом тарифе.</span>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Матчи</h1>
        {props.teamMatches.map((teamMatch) => (
          <div key={teamMatch.id}>
            <div>
              <span>
                {' '}
                <div>
                  <table className={classes.teamCelendarTable}>
                    <tr>
                      <td>{teamMatch.utcDate}</td>
                      <td>{teamMatch.status}</td>
                      <td>{teamMatch.homeTeam.name}</td>
                      <td>-</td>
                      <td>{teamMatch.awayTeam.name}</td>
                      <td>
                        {teamMatch.score.fullTime.homeTeam}-
                        {teamMatch.score.fullTime.awayTeam}
                      </td>
                      <td>
                        {teamMatch.score.extraTime.homeTeam} -{' '}
                        {teamMatch.score.extraTime.awayTeam}
                      </td>
                      <td>
                        {teamMatch.score.penalties.homeTeam} -{' '}
                        {teamMatch.score.penalties.awayTeam}
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

export default TeamCalendar;
