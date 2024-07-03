import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./cardItem.module.css";

const CardItem = ({ item }) => {
  const [count, setCount] = useState(item.quantity);

  const handleDecreaseQuantity = () => {
    if (count > 0) {
      setCount(count - 1);
      item.quantity--;
    }
  };

  const handleIncreaseQuantity = () => {
    if (count < item.stockage) {
      setCount(count + 1);
      item.quantity++;
    }
  };

  return (
    <div className=" d-flex mb-3" id={styles.container}>
      <img src={item.product} alt={item.name} id={styles.img} />

      <div className="flex-grow-1 ms-3">
        <h6 className={`mb-0`}>{item.name}</h6>
        <div className="mb-1">{item.quantity + item.unite}</div>
        <FaTrash className="text-danger mb-3" />
      </div>
      <div className="Add">
        <div className="mt-2">{item.price.toFixed(2) * item.quantity} Ar</div>
        <div className="input-group justify-content-end">
          <button
            className="btn btn-outline-secondary"
            onClick={handleDecreaseQuantity}
            id={styles.btn}
          >
            -
          </button>
          <div className="btn btn-outline-secondary" id={styles.counter}>
            {count}
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={handleIncreaseQuantity}
            id={styles.btn}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
