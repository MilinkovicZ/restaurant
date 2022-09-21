import React from "react";
import styles from "./MealItem.module.css";

function MealItem(props) {
  return (
    <li className={styles.meal}>
      <h3>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>{props.price}</p>
    </li>
  );
}

export default MealItem;
