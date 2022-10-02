// Библиотеки
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
import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={s.text}>Error, we cannot display date.</p>
    </>
  );
};

export default ErrorMessage;
