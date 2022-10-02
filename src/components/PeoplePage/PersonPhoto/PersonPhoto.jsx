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
import s from "./PersonPhoto.module.css";

const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div className={s.container}>
      <img className={s.photo} src={personPhoto} alt={personName} />
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonPhoto;
