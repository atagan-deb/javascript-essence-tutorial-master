const arry = [1, 2, 3, 4, 5];

arry.forEach((v, i, a) => {
  console.log(v, i, a);
});

const newArry = arry.map((v, i, arry) => {
  return [v * 2, i, arry];
});
console.log(newArry);

const filterArry = arry.filter((v, i, arry) => {
  return i >= 2;
});

console.log(filterArry);
