import React, { createContext, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import styles from "./HeaderButton.module.css";

function HeaderButton(props) {
  const context = useContext(CartContext);

  const numberOfItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onButtonClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderButton;
