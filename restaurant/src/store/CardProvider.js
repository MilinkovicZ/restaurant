import CardContext from "./cart-context.js";
import React, { useReducer } from "react";

const CardReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.value);
    const updatedTotalAmount =
      state.totalAmount + action.value.price * action.value.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return { items: [], totalAmount: 0 };
};

function CardProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(CardReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", value: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", value: id });
  };

  const cardContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
}
export default CardProvider;
