import React from "react";
import "./Button.css";

const Button = ({ text, type, size, color }) => {
	const className = `button ${type} ${size} ${color}`;

	return (
		<button className={className}>
			{text}
			{type === "btn_arrow-right" && (
				<i className="arrow-icon fa-solid fa-arrow-right"></i>
			)}
		</button>
	);
};

export default Button;
