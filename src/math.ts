const getPair = (): [number, number, number] => {
  const rand1 = 2 + Math.floor(Math.random() * 11);
  const rand2 = 2 + Math.floor(Math.random() * 11);
  return [rand1, rand2, rand1 * rand2];
};

export const getExpression = (): [string, string] => {
  const [rand1, rand2, product] = getPair();
  return [`${rand1} x ${rand2}`, `${rand1} x ${rand2} = ${product}`];
};
