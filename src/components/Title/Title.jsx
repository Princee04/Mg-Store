import React from "react";

const Title = ({ text, size }) => {
  return <div className={`display-${size} fw-bold`}>{text}</div>;
};

export default Title;
