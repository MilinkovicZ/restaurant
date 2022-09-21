import React, { useContext } from "react";
import CartContext from "../../store/cart-context.js";
import Modal from "../UI/Modal.js";
import styles from "./Cart.module.css";
import CartItem from "./CartItem.js";

function Cart(props) {
  const context = useContext(CartContext);
  const totalAmount = context.totalAmount.toFixed(2);
  const hasItems = context.items.length === 0 ? false : true;

  const cartItemAddHandler = (item) => {};

  const cartItemRemoveHandler = (id) => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onButtonPress}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onButtonPress} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
