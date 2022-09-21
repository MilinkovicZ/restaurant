import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";

function MealItemForm(props) {
  const [isValidInput, setIsValidInput] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 10
    ) {
      setIsValidInput(false);
      return;
    }

    setIsValidInput(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Order</button>
      {!isValidInput && <p>PLEASE ENTER A VALID AMOUNT (1-10)!</p>}
    </form>
  );
}

export default MealItemForm;
