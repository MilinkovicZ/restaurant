import React from "react";
import MealsData from "./MealsData.js";
import MealsText from "./MealsText.js";

function Meals() {
  return (
    <React.Fragment>
      <MealsText />
      <MealsData />
    </React.Fragment>
  );
}

export default Meals;
