import React from "react";
import MealsData from "./MealsData";
import MealsSummary from "./MealsText";

function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealsData />
    </React.Fragment>
  );
}

export default Meals;
