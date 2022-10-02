// Библиотеки
import PropTypes from "prop-types";
// Контекст
// HOC
// UI компоненты
// Компоненты
import UiButton from "../../UI/UiButton/UiButton";
// Изображения
// Хуки
// Роуты
import { Link } from "react-router-dom";
// Утилиты
// Сервисы
// Константы
// Стили
import s from "./PeopleNav.module.css";

const PeopleNav = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={s.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={s.link}>
        <UiButton
          text='Previous'
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={s.link}>
        <UiButton text='Next' onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

PeopleNav.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNav;
