// Библиотеки
import s from "./Header.module.css";
// Контекст
// HOC
// UI компоненты
// Компоненты
// Изображения
// Хуки
// Роуты
import { NavLink, Link } from "react-router-dom";
// Утилиты
// Сервисы
// Константы
// Стили

const Header = () => {
  return (
    <div className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to='/' end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/people/?page=1'>People</NavLink>
        </li>
        <li>
          <NavLink to='/not-found'>404 Not Found</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
