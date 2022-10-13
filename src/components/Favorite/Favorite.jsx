// Библиотеки
import { Link } from "react-router-dom";
// Контекст
// HOC
// UI компоненты
// Компоненты
// Изображения
import icon from "./img/bookmark.svg";
// Хуки
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// Роуты
// Утилиты
// Сервисы
// Константы
// Стили
import s from "./Favorite.module.css";

const Favorite = () => {
	const [count, setCount] = useState();
	const storeDate = useSelector(state => state.favoriteReducer);

	useEffect(() => {
		const length = Object.keys(storeDate).length;
		length.toString().length > 2 ? setCount("..") : setCount(length);
		setCount(length);
	});
	return (
		<div className={s.container}>
			<Link to='/favorites'>
				<span className={s.counter}>{count}</span>
				<img className={s.icon} src={icon} alt='favorite' />
			</Link>
		</div>
	);
};

export default Favorite;
