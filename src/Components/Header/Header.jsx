import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink className={classes.link} to='/Leagues'>
              Лиги
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to='/Teams'>
              Команды
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
