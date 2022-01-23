/**
 * 問題：
 * 反復操作可能なオブジェクトIteratableObject
 * を作成してみましょう。
 * Arrayと同様に以下のメソッドが使用可能とします。
 *
 * set(key, value)  *1
 * forEach
 * map
 * filter
 *
 * *1:setはチェーンメソッドとしてつなげられるように実装してみてください。
 *
 * また、for...ofを使用した際にはMapと同じ挙動を取るものとします。
 *
 */
class IteratableObject {
  constructor(obj) {
    for (let prop in obj) {
      this[prop] = obj[prop];
    }
  }

  set(key, value) {
		this[key] = value;
    return this;
  }
	*[Symbol.iterator](){
		for(let key in this){
			yield [key, this[key]]
		}
	}
  forEach(callback) {
    let index = 0;
    for (let [k, v] of this) {
      callback(v, index, this);
      index++;
    }
  }
  map(callback) {
    const newInstance = new IteratableObject();
    let index = 0;
    for (let [k, v] of this) {
      newInstance[k] = callback(v, index, this);
      index++;
    }
    return newInstance;
  }
  filter(callback) {
    const newInstance = new IteratableObject();
    let index = 0;
    for (let [k, v] of this) {
      if (callback(v, k, index, this)) {
        newInstance[k] = v;
      }
      index++;
    }
    return newInstance;
  }
  // map(callback) {
  //   const newInstance = new IteratableObject();
  //   let index = 0;
  //   for (let prop in this) {
  //     newInstance[prop] = callback(this[prop], index, this);
  //     index++;
  //   }
  //   return newInstance;
  // }
  // filter(callback) {
  //   const newInstance = new IteratableObject();
  //   let index = 0;
  //   for (let prop in this) {
  //     if (callback(this[prop], prop, index, this)) {
  //       newInstance[prop] = this[prop];
  //     }
  //     index++;
  //   }
  //   return newInstance;
  // }

  print(label = "") {
    console.log(`%c ${label}`, "color: orange; font-weight: 600;", this);
    return this;
  }
}

function prefix(v, i, obj) {
  return "prefix-" + v;
}

const original = new IteratableObject({
  key1: "value1",
  key2: "value2",
  key3: "value3",
});

const result = original
  .print("place1")
  .map(prefix)
  .print("place2")
  .set("key4", "value4")
  .print("place3")
  // .forEach((v, i) => console.log(i, v))
  .filter(function (val, key) {
    return key === "key4";
  });

console.log("%coriginal", "color: green; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
/**
 * 期待する出力結果
 * original
 * {key1: "value1", key2: "value2", key3: "value3"}
 *
 * result
 * {key4: "value4"}
 */
