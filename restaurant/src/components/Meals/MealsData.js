import React, { useState, useEffect } from "react";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";
import styles from "./MealsData.module.css";

function MealsData() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://meals-demo-2a756-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setTimeout(() => {
        setMeals(loadedMeals);
        setIsLoading(false);
      }, 1000);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
      console.log(error.message);
    });
  }, []);

  let content;

  if (hasError) {
    content = (
      <section className={styles.MealsError}>
        <p>{hasError}</p>
      </section>
    );
  } else if (!hasError && isLoading) {
    content = (
      <section className={styles.MealsLoading}>
        <p>Meals are loading...</p>
      </section>
    );
  } else {
    content = (
      <ul>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    );
  }

  return <Card className={styles.meals}>{content}</Card>;
}

export default MealsData;
