import { useState } from "react";
import {
	useTheme,
	THEME_LIGHT,
	THEME_DARK,
} from "./../../../context/ThemeProvider";
import s from "./ChooseSide.module.css";

const ChooseSide = () => {
	const isTheme = useTheme();

	const [x, setX] = useState(false);
	const soldCheckbox = ({ target: { checked } }) => {
		setX(checked);
		checked ? isTheme.change(THEME_DARK) : isTheme.change(THEME_LIGHT);
	};

	return (
		<div>
			{/* {isTheme.theme} */}
			<div className={s.switch}>
				<input
					onClick={soldCheckbox}
					className={s.switch__input}
					type='checkbox'
					id='themeSwitch'
				/>
				<label
					aria-hidden='true'
					className={s.switch__label}
					htmlFor='themeSwitch'
				></label>
				<div aria-hidden='true' className={s.switch__marker}></div>
			</div>
		</div>
	);
};

export default ChooseSide;
