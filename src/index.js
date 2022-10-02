// Библиотеки
import React from "react";
import ReactDOM from "react-dom/client";
// Контекст
// HOC
// UI компоненты
// Компоненты
import App from "./containers/App";
// Изображения
// Хуки
// Роуты
import { BrowserRouter } from "react-router-dom";
// Утилиты
// Сервисы
// Константы
// Стили
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
