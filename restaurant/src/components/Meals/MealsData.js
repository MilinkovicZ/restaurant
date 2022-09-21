import React, { useState } from "react";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";
import styles from "./MealsData.module.css";

const MEALS_INITIAL = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish from Japan!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Karadjordjeva Schnitzel",
    description: "A serbian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, extra cheese, hot!",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Vegetarian dish",
    description: "Very green and healthy!",
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
            key={meal.id}
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
