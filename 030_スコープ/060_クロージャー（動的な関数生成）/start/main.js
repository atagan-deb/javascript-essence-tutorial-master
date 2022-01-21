function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5); // numに5を設定したaddNumber関数が作成される
const result = add5(10); // addNumberのvalueに10が渡される => 5 + 10
console.log(result); // 15
