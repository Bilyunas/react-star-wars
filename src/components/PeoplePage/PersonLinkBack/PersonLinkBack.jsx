// Библиотеки
import { useNavigate } from "react-router";
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
import s from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = e => {
    e.preventDefault();
  };
  return (
    <div className={s.wrapper}>
      <a
        className={s.link}
        href='#'
        onClick={() => {
          navigate(-1);
        }}
      >
        <span className={s.button}>&#8249;</span>
        <span className={s.button__text}>Go Back</span>
      </a>
    </div>
  );
};

export default PersonLinkBack;
