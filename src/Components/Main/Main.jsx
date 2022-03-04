import classes from './Main.module.css';

const Main = () => {
  return (
    <div className={classes.mainContent}>
      <div>
        <h1>SoccerStat</h1>
        <div className={classes.text}>
          <p>
            <b>SoccerStat</b> - это приложение для просмотра футбольной
            статистики. Здесь вы можете просмотреть:
          </p>
          <p>
            <i>Список лиг</i>, на основании которых формируется статистика.
          </p>
          <p>
            {' '}
            <i>Календарь лиги</i> - список матчей лиги.{' '}
          </p>
          <p>
            {' '}
            <i>Список команд</i>, принимающих участие в матчах выбранной лиги.{' '}
          </p>
          <p>
            {' '}
            <i>Календарь команды</i> - список матчей, в которых принимает
            участие выбранная команда.{' '}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
