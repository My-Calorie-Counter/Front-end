import React from "react";
import useCalculateMacros from "../Hooks/useCalculateMacros.js";

const Macro = () => {
  const [calcProtein, calcFat, calcCarb] = useCalculateMacros();

  let dailyGoals = {
    macros: {
      protein: 165,
      fat: 60,
      carb: 200,
    },
    calories: function () {
      const pCals = this.macros.protein * 4;
      const fCals = this.macros.fat * 9;
      const cCals = this.macros.carb * 4;
      return pCals + fCals + cCals;
    },
  };

  let totalCals;

  let protein = calcProtein(165);
  let fat = calcFat(60);
  let carb = calcCarb(200);

  if (protein && fat && carb) {
    totalCals = protein + fat + carb;
    console.log("Total Calories", totalCals);
  }

  return (
    <>
      <h1>hello from macros component</h1>
    </>
  );
};

export default Macro;
