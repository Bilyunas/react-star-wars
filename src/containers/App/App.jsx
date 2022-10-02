// Библиотеки
// Контекст
// HOC
// UI компоненты
// Компоненты
import Header from "../../components/Header/Header";
import routesConfig from "../../routes/routesConfig";
// Изображения
// Хуки
// Роуты
import { Routes, Route } from "react-router-dom";
// Утилиты
// Сервисы
// Константы
// Стили
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
