import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "../../components/UI/UiInput/UiInput";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { getApiResource } from "./../../utils/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "./../../hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "./../../services/getPeopleData";
import s from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
	const [inputSearchValue, setInputSearchValue] = useState("");
	const [people, setPeople] = useState("");

	const getResponse = async param => {
		const res = await getApiResource(API_SEARCH + param);

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImage(id);

				return {
					id,
					name,
					img,
				};
			});

			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResponse("");
	}, []);

	const debouncedGetResponse = useCallback(
		debounce(value => getResponse(value), 500),
		[]
	);

	const handleInputChange = value => {
		setInputSearchValue(value);
		debouncedGetResponse(value);
	};
	return (
		<div className={s.container}>
			<h1 className='header__text'>SearchPage</h1>
			<UiInput
				value={inputSearchValue}
				handleInputChange={handleInputChange}
				placeholder='Input characters"s name...'
				classes={s.input__search}
			/>
			<SearchPageInfo people={people} />
		</div>
	);
};

SearchPage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
