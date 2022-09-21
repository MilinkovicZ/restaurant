import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";

function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
}

export default MealItemForm;
