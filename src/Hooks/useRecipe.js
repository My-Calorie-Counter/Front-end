export default () => {
  // one serving = 100 grams

  const calcRedPotatoe = (serv) => {
    const f = 0.1 * serv;
    const p = 2.3 * serv;
    const c = 19.5 * serv;
    const totalCals = f * 9 + p * 4 + c * 4;
    return `fat ${f} protein ${p} carb ${c} Total Calories ${totalCals}`;
  };

  const calcChicken = (serv) => {
    const f = 1.2 * serv;
    const p = 23 * serv;
    const c = 0 * serv;
    const totalCals = f * 9 + p * 4 + c * 4;

    return `fat ${f} protein ${p} carb ${c} Total Calories ${totalCals}`;
  };
  return [calcRedPotatoe, calcChicken];
};
