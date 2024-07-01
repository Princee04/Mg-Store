import React from "react";
import CardItem from "../../components/CardItem/cardItem.jsx";

const Card = ({ items }) => {
  return (
    <div className="card">
      <div
        className="card-header d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className="Title" style={{ color: "#38ab4d" }}>
          <h2>Mg-Store</h2>
          <p className="text-muted">Location in 382480</p>
        </div>
        <div className="Remove">
          <span style={{ lineHeight: "80px", color: "#38ab4d" }}>X</span>
        </div>
      </div>
      <div className="card-body">
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary text-light"
          style={{ background: "#13405a" }}
        >
          Continue Shopping
        </button>
        <button
          className="btn btn-outline-secondary text-light"
          style={{ background: "#38ab4d" }}
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
