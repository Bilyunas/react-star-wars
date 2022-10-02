// Библиотеки
import PropTypes from "prop-types"
import React, { useEffect, useState, Suspense } from "react"
import { useParams } from "react-router"
// Контекст
// HOC
import { withErrorApi } from "../../hoc-helpers/withErrorApi"
// UI компоненты
// Компоненты
import PersonInfo from "../../components/PeoplePage/PersonInfo/PersonInfo"
import PersonPhoto from "../../components/PeoplePage/PersonPhoto/PersonPhoto"
import PersonLinkBack from "../../components/PeoplePage/PersonLinkBack/PersonLinkBack"
import UiLoading from "../../components/UI/UiLoading/UiLoading"
// Изображения
// Хуки
// Роуты
// Утилиты
import { getApiResource } from "../../utils/network"
import { getPeopleImage } from "../../services/getPeopleData"
// Сервисы
// Константы
import { API_PERSON } from "../../constants/api"
// Стили
import s from "./PersonPage.module.css"

const PersonFilms = React.lazy(() =>
	import("../../components/PeoplePage/PersonFilms/PersonFilms")
)

const PersonPage = ({ setErrorApi }) => {
	const [personInfo, setPersonInfo] = useState(null)
	const [personName, setPersonName] = useState(null)
	const [personPhoto, setPersonPhoto] = useState(null)
	const [personFilms, setPersonFilms] = useState(null)

	const { id } = useParams()
	useEffect(() => {
		;(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`)

			if (res) {
				setPersonInfo([
					{ title: "Рост:  ", data: res.height },
					{ title: "Вес:  ", data: res.mass },
					{ title: "Цвет кожи:  ", data: res.skin_color },
					{ title: "Цвет глаз:  ", data: res.eye_color },
					{ title: "Год рождения:  ", data: res.birth_year },
					{ title: "Пол:  ", data: res.gender },
				])

				setPersonName(res.name)
				setPersonPhoto(getPeopleImage(id))

				res.films.length && setPersonFilms(res.films)

				setErrorApi(false)
			} else {
				setErrorApi(true)
			}
		})()
	}, [])

	return (
		<>
			<PersonLinkBack />
			<div className={s.wrapper}>
				<span className={s.person__name}>{personName}</span>
				<div className={s.container}>
					<PersonPhoto personPhoto={personPhoto} personName={personName} />
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						<Suspense fallback={<UiLoading />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>
			</div>
		</>
	)
}

PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
