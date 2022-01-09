// プライベート変数の定義
let num1 = 0;
increment1();
increment1();
increment1();

function increment1() {
  num1 = num1 + 1;
  console.log(num1);
}

num1 = 0; // どこからでも参照・変更できちゃう！
increment1();

console.log("------------------------------------------------");
function incrementFactory() {
  let num2 = 0;
  function increment() {
    num2 = num2 + 1;
    console.log(num2);
  }
  return increment;
}

const increment2 = incrementFactory();
increment2();
increment2();
increment2();

// console.log(num2); // 外側からは参照できない！！！
