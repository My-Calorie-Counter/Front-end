import React from "react";
import useRecipe from "../Hooks/useRecipe.js";

const Recipe = () => {
  const [calcRedPotatoe, calcChicken] = useRecipe();

  console.log(`Red Potatoes ${calcRedPotatoe(7.4)}`);
  console.log(`Chicken ${calcChicken(3.8)}`);

  return (
    <>
      <h1>Recipe component</h1>
    </>
  );
};

export default Recipe;
