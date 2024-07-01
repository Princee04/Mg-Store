import React, { useState } from "react";

const CardItem = ({ item }) => {
  const [count, setCount] = useState(0);

  const Minus = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };

  const Plus = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center mb-3"
      style={{ borderBottom: "1px solid grey" }}
    >
      <img
        src={item.product}
        alt={item.name}
        style={{
          width: "70px",
          height: "70px",
        }}
      />

      <div className="flex-grow-1 ms-3">
        <h5
          className={`mb-2`}
          style={{ color: item.disponible ? "black" : "red" }}
        >
          {item.name}
        </h5>
        <p className="mb-0">
          {item.quantity}
          {item.unite}
        </p>
      </div>
      <div className="">
        <div className="input-group justify-content-end">
          <button
            className="btn btn-outline-secondary"
            onClick={Minus}
            style={{ color: "white", fontSize: "20px", background: "#13405a" }}
          >
            -
          </button>
          <div
            style={{
              alignItems: "center",
              height: "auto",
              width: "35px",
              border: "1px solid transparent",
              textAlign: "center",
              lineHeight: "40px",
              color: "white",
              fontSize: "20px",
              background: "#13405a",
            }}
          >
            {count}
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={Plus}
            style={{ color: "white", fontSize: "20px", background: "#13405a" }}
          >
            +
          </button>
        </div>
        <div>
          <p style={{ color: item.disponible ? "black" : "red" }}>
            {item.price.toFixed(2)} Ariary
          </p>
          {item.originalPrice && (
            <p className="mb-0 text-muted text-decoration-line-through">
              {item.originalPrice.toFixed(2)} Ariary
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
