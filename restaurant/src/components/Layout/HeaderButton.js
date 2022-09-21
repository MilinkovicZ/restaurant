import React from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderButton.module.css";

function HeaderButton() {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeaderButton;
