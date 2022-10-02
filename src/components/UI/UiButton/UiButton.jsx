// Библиотеки
import PropTypes from "prop-types";
import cn from "classnames";
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
import s from "./UiButton.module.css";
import "../index.css";

const UiButton = ({ text, onClick, disabled, theme = "dark", classes }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(s.buttons, s[theme], classes)}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UiButton;
