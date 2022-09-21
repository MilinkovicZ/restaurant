import React, { useState } from "react";
import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";
import styles from "./MealsData.module.css";

const MEALS_INITIAL = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function MealsData() {
  const [meals, setMeals] = useState(MEALS_INITIAL);
  return (
    <Card className={styles.meals}>
      <ul>
        {meals.map((meal) => (
          <MealItem
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
}

export default MealsData;
