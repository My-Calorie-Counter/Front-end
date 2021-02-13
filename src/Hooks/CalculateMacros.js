import { useState } from "react";

export default ({}) => {
  const calcFat = (num) => {
    num === undefined
      ? console.log(`At ${0} grams of fat your calories from fat are ${0}`)
      : console.log(
          `At ${num} grams of fat your calories from fat are ${num * 9}`
        );

    if (num === undefined) {
      return 0;
    } else {
      return num * 9;
    }
  };

  const calcProtein = (num) => {
    num === undefined
      ? console.log(
          `At ${0} grams of protein your calories from protein are ${0}`
        )
      : console.log(
          `At ${num} grams of protein your calories from protein are ${num * 4}`
        );

    if (num === undefined) {
      return 0;
    } else {
      return num * 4;
    }
  };

  const calcCarb = (num) => {
    num === undefined
      ? console.log(`At ${0} grams of carb your calories from carb are ${0}`)
      : console.log(
          `At ${num} grams of carb your calories from carb are ${num * 4}`
        );

    if (num === undefined) {
      return 0;
    } else {
      return num * 4;
    }
  };
  return [calcCarb, calcFat, calcProtein];
};
