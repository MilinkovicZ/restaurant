import React, { useContext } from "react";
import CartContext from "../../../store/cart-context.js";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.js";

function MealItem(props) {
  const context = useContext(CartContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
