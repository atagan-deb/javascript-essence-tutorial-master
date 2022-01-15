/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

// class Calculator {
//   constructor() {
//     this.ret = 0;
//     this.operator = "";
//   }
//   set(num) {
//     switch (this.operator) {
//       case "+":
//         this.ret += num;
//         break;
//       case "-":
//         this.ret -= num;
//         break;
//       case "*":
//         this.ret *= num;
//         break;
//       case "/":
//         this.ret /= num;
//         break;
//       default:
//         this.ret = num;
//     }
//     if (this.operator !== "") {
//       console.log(this.ret);
//       this.operator = "";
//     }
//     return this;
//   }
//   plus() {
//     this.operator = "+";
//     return this;
//   }
//   minus() {
//     this.operator = "-";
//     return this;
//   }
//   multiply() {
//     this.operator = "*";
//     return this;
//   }
//   divide() {
//     this.operator = "/";
//     return this;
//   }
// }

class Calculator {
  constructor() {
    this.value = 0;
    this._operator = null;
  }
  set(val) {
    if (this._operator === null) {
      this.value = val;
    } else {
      this._operator(this.value, val);
    }
    return this;
  }
  plus() {
		// 実行する関数を定義する
    this._operator = function (val1, val2) {
      this._equal(val1 + val2);
    };
    return this;
  }
  minus() {
    this._operator = function (val1, val2) {
      this._equal(val1 - val2);
    };
    return this;
  }
  multiply() {
    this._operator = function (val1, val2) {
      this._equal(val1 * val2);
    };
    return this;
  }
  divide() {
    this._operator = function (val1, val2) {
      this._equal(val1 / val2);
    };
    return this;
  }
  _equal(result) {
		// 結果の格納を任せる
    this.value = result;
    console.log(result);
  }
}
const calc = new Calculator();
// calc.set(10).plus().set(2);
calc.set(10).minus().set(3).multiply().set(6).divide().set(2).plus().set(2);
