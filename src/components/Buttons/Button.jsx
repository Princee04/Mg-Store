import React from "react";

const Button = ({ color, children, click, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn btn-${color}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
