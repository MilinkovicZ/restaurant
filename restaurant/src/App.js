import React, { useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import CardProvider from "./store/CardProvider.js";

function App() {
  const [isShowed, setIsShowed] = useState(false);

  const showCartHandler = () => {
    setIsShowed(true);
  };

  const hideCartHandler = () => {
    setIsShowed(false);
  };

  return (
    <CardProvider>
      {isShowed && <Cart onButtonPress={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
