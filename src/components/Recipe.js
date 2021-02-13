import React from "react";

const Recipe = () => {
  // one serving = 100 grams
  const calcRedPotatoe = (serv) => {
    const f = 0.1 * serv;
    const p = 2.3 * serv;
    const c = 19.5 * serv;
    return `fat ${f} protein ${p} carb ${c} Total Calories ${
      f * 9 + p * 4 + c * 4
    }`;
  };

  const calcChicken = (serv) => {
    const f = 1.2 * serv;
    const p = 23 * serv;
    const c = 0 * serv;
    return `fat ${f} protein ${p} carb ${c} Total Calories ${
      f * 9 + p * 4 + c * 4
    }`;
  };

  // make a calcMeal function that takes all the macros and adds them up and displays the total calories as well as the macros

  console.log(`Red Potatoes ${calcRedPotatoe(7.4)}`);
  console.log(`Chicken ${calcChicken(3.8)}`);

  return (
    <>
      <h1>Recipe component</h1>
    </>
  );
};

export default Recipe;
