import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterFoods, setFilterFoods] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
  }

  function handleClick(id) {
    const newFoods = foods.map(food => {
      if (food.id === id) {
        const updatedFood = { ...food, heatLevel: food.heatLevel + 1 };
        return updatedFood;
      }
      else
        return food;
    });
    setFoods(newFoods);
  }

  function handleChange(e) {
    setFilterFoods(e.target.value);
  }

  const foodsToDisplay = foods.filter(food => {
    if (filterFoods === "All")
      return true;
    else
      return food.cuisine === filterFoods;
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
