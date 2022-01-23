const arry = [1, 2, 3, 4, 5];

const result = arry.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
}, 200);

console.log(result);
