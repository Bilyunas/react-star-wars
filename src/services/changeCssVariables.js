/*
Формат CSS-переменной:
--theme-def-УникальноеИмя			#	дефолтная переменная
--theme-light-УникальноеИмя		#	для 'light'
--theme-dark-УникальноеИмя		# для 'dark'
*/

export const changeCssVariables = theme => {
	const root = document.querySelector(":root");

	const cssVariables = ["header", "bg"];
	cssVariables.forEach(el => {
		root.style.setProperty(`--theme-def-${el}`, `var(--theme-${theme}-${el})`);
	});
};
