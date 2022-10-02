// Библиотеки
import { useState } from "react";
// Контекст
// HOC
// UI компоненты
// Компоненты
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
// Изображения
// Хуки
// Роуты
// Утилиты
// Сервисы
// Константы
// Стили

export const withErrorApi = View => {
  return props => {
    const [erroApi, setErrorApi] = useState(false);
    return (
      <>
        {erroApi ? (
          <ErrorMessage />
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
