import React from "react";
import CardItem from "../../components/CardItem/cardItem.jsx";
import { FaTimes } from "react-icons/fa";
import styles from "./card.module.css";

const Card = ({ items }) => {
  return (
    <div className="card">
      <div className="card-header d-flex" id={styles.header}>
        <div className={styles.title}>
          <h2>Mg-Store</h2>
          <p className="text-muted">Location in 382480</p>
        </div>
        <div className="Remove">
          <FaTimes id={styles.quit} />
        </div>
      </div>
      <div className="card-body" id={styles.body}>
        <div className="alert alert-danger alert-dimissible">
          You've got FREE. Start checkout now!
        </div>
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary text-light"
          id={styles.btnshop}
        >
          Continue Shopping
        </button>
        <button
          className="btn btn-outline-secondary text-light"
          id={styles.btnshop}
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
