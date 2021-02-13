import React from "react";

const Macro = () => {
  let protein = calcProtein(165);
  let fat = calcFat(60);
  let carb = calcCarb(200);

  if (protein && fat && carb) {
    console.log("Total Calories", protein + fat + carb);
  }

  return (
    <>
      <h1>hello from macros component</h1>
    </>
  );
};

export default Macro;
