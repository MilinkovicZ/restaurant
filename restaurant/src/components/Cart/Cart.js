import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context.js";
import Modal from "../UI/Modal.js";
import styles from "./Cart.module.css";
import CartItem from "./CartItem.js";
import Checkout from "./Checkout.js";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const context = useContext(CartContext);
  const totalAmount = context.totalAmount.toFixed(2);
  const hasItems = context.items.length === 0 ? false : true;

  const cartItemAddHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://meals-demo-2a756-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: context.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    context.emptyCart();
  };

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && (
        <div>
          <Checkout
            onCancel={props.onButtonPress}
            onSubmit={submitOrderHandler}
          />
        </div>
      )}
      {!isCheckout && (
        <div className={styles.actions}>
          <button
            onClick={props.onButtonPress}
            className={styles["button--alt"]}
          >
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const submittingModalContent = <p>Sending order data...</p>;
  const submittedModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button onClick={props.onButtonPress}>Close</button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onButtonPress}>
      {!IsSubmitting && !didSubmit && cartModalContent}
      {IsSubmitting && submittingModalContent}
      {!IsSubmitting && didSubmit && submittedModalContent}
    </Modal>
  );
}

export default Cart;
