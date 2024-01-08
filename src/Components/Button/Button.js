import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="text-white lg:text-xl md:text-lg text-base font-normal rounded-[10px] bg-[#396D00] px-3 py-2">
      {props.text} <i className="arrow-icon fa-solid fa-arrow-right"></i>
    </button>
  );
};

export default Button;
