import React, { useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";

function App() {
  const [isShowed, setIsShowed] = useState(false);

  const showCartHandler = () => {
    setIsShowed(true);
  };

  const hideCartHandler = () => {
    setIsShowed(false);
  };

  return (
    <React.Fragment>
      {isShowed && <Cart onButtonPress={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
