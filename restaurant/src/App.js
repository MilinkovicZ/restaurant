import React from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
