// Библиотеки
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
// Контекст
// HOC
// UI компоненты
// Компоненты
import App from "./containers/App";
import ThemeProvider from "./context/ThemeProvider";
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
			<Provider store={store}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);
