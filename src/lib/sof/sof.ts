export const sumOfFactorials = (n: number): number => {
  const factorial = (num: number): number => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  };

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += factorial(i);
  }

  return sum;
};
