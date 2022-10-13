import PropTypes from "prop-types";
import iconX from "./img/x.svg";
import cn from "classnames";
import s from "./UiInput.module.css";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
	<div className={cn(s.wrapper__input, classes)}>
		<input
			type='text'
			value={value}
			onChange={e => handleInputChange(e.target.value)}
			placeholder={placeholder}
			className={s.input}
		/>
		<img
			onClick={() => value && handleInputChange("")}
			src={iconX}
			className={cn(s.clear, !value && s.clear__disabled)}
			alt='Clear'
		/>
	</div>
);

UiInput.propTypes = {
	value: PropTypes.string,
	handleInputChange: PropTypes.func,
	placeholder: PropTypes.string,
	classes: PropTypes.string,
};

export default UiInput;
