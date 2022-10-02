// Библиотеки
import { useLocation } from "react-router";
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
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <p className={s.notFound}>404 - Not Found</p>
      <p className={s.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
