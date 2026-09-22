const lowerBound = 2; // Skip 0 and 1 times table items.
const upperBound = 12;

const getRandomProduct = (): [number, number, number] => {
  const rand1 = lowerBound + Math.floor(Math.random() * (upperBound - 1));
  const rand2 = lowerBound + Math.floor(Math.random() * (upperBound - 1));
  return [rand1, rand2, rand1 * rand2];
};

export const getExpression = (): [string, string] => {
  const [rand1, rand2, product] = getRandomProduct();
  return [`${rand1} \u00D7 ${rand2}`, `${rand1} \u00D7 ${rand2} = ${product}`];
};
