// Библиотеки
import PropTypes from "prop-types"
// Контекст
// HOC
// UI компоненты
// Компоненты
// Изображения
import loaderRed from "./img/loader-red.svg"
// Хуки
// Роуты
// Утилиты
// Сервисы
// Константы
// Стили
import s from "./UiLoading.module.css"

const UiLoading = () => {
	return <img className={s.loader} src={loaderRed} alt='Loader' />
}

UiLoading.propTypes = {
	text: PropTypes.string,
}

export default UiLoading
