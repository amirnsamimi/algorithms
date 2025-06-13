export const fibbo = (input = 0) => {
  let target = input;
  let a;
  let b = 0;
  let c = 0;

  for (let i = 0; i <= target; i++) {
    if (i === 0) {
      a = b + c;
    }
    if (i === 1) {
      c = 1;
    } else {
      c = b;
      b = a;
    }
    a = b + c;
  }
  return a;
};
