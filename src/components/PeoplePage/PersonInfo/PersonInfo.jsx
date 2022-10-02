// Библиотеки
import PropTypes from "prop-types";
// Контекст
// HOC
// UI компоненты
// Компоненты
// Изображения
// Хуки
// Роуты
// Утилиты
// Сервисы
// Константы
// Стили
import s from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list__container}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={s.list__item} key={title}>
                <span className={s.item__title}>{title}</span>
                <span className={s.item__title_data}>{data}</span>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
