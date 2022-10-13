import { useEffect, useState } from "react";
import {
	useTheme,
	THEME_LIGHT,
	THEME_DARK,
} from "./../../context/ThemeProvider";
import imgLight from "./img/light.png";
import imgDark from "./img/dark.png";
import { NavLink, Link } from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import s from "./Header.module.css";
import ChooseSide from "../HomePage/ChooseSide/ChooseSide";

const Header = () => {
	const [icon, setIcon] = useState(imgLight);
	const isTheme = useTheme();

	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_LIGHT:
				setIcon(imgLight);
				break;
			case THEME_DARK:
				setIcon(imgDark);
				break;
			default:
				setIcon(imgLight);
		}
	}, [isTheme]);

	return (
		<div className={s.container}>
			<img className={s.logo} src={icon} alt='Star Wars' />
			<ul className={s.list__container}>
				<li>
					<NavLink to='/' end>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/people/?page=1'>People</NavLink>
				</li>
				<li>
					<NavLink to='/search'>Search</NavLink>
				</li>
				<li>
					<NavLink to='/not-found'>404 Not Found</NavLink>
				</li>
			</ul>
			<ChooseSide />
			<Favorite />
		</div>
	);
};

export default Header;
