import CardContext from "./cart-context.js";
import React, { useReducer } from "react";

const CardReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.value.price * action.value.amount;
    //Pronadjem index itema ako postoji item sa tim ID-em
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    //Ako postoji item, napravi objekat updated item, gde samo preuzmemo vec postojeci i povecamo broj za amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.value.amount,
      };
      //Preuzmemo listu itema i na taj index dodamo novi item (item sa novim amountom)
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //Ako ne postoji samo dodamo u niz novi item
      updatedItems = state.items.concat(action.value);
    }
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
