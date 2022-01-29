/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
  push(val) {
    super.push(val);
    return this;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  map(callback) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newInstance.push(callback(this[i], i, this));
    }
    return newInstance;
  }
  filter(callback) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newInstance.push(this[i]);
      }
    }
    return newInstance;
  }
  reduce(callback, acc) {
    const arr = [...this];
    acc = acc !== undefined ? acc : arr.shift();
    for (let i = 0; i < arr.length; i++) {
      acc = callback(acc, arr[i]);
    }
    return acc;
  }

  // push(value) {
  //   return new MyArray(...this, value);
  // }
  // forEach(fn) {
  //   let index = 0;
  //   for (const value of this) {
  //     fn(value, index);
  //     index++;
  //   }
  // }
  // map(fn) {
  //   const result = [];
  //   let index = 0;
  //   for (const value of this) {
  //     result.push(fn(value, index, this));
  //     index++;
  //   }
  //   return new MyArray(...result);
  // }
  // filter(fn) {
  //   const result = [];
  //   let index = 0;
  //   for (const value of this) {
  //     if (fn(value, index, this)) {
  //       result.push(value);
  //     }
  //     index++;
  //   }
  //   return new MyArray(...result);
  // }
  // reduce(fn, init) {
  //   let index = 0;
  //   const arry = [...this];
  //   let result = init !== undefined ? init : arry.shift();
  //   for (const value of arry) {
  //     result = fn(result, value, index, this);
  //     index++;
  //   }
  //   return result;
  // }

  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
	.print("place1")
  .map(double)
	.print("place2")
  .push(5)
	.print("place3")
  .filter(function (v, i) {
		return v > 2;
  })
	.print("place4")
  .reduce(function (accu, curr) {
    return accu + curr;
  });

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
