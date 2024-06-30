import React from "react";

const Button = ({ color, children, click, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      className={`btn btn-${color}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
