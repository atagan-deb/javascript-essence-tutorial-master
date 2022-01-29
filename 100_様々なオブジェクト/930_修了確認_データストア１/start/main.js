/**
 * 問題：
 * オブジェクトの状態をlocalStorageに保存してみましょう。
 * 以下の要件に従ってlocalStorageに状態を保持するオブジェクト
 * を作成してみてください。
 *
 * １．オブジェクトの値が変更された場合に
 * オブジェクトをJSONに変換してlocalStorageに
 * 登録します。localStorageに登録する際のキー
 * は"test-data"としてください。
 *
 * ２．プログラムが実行される際にlocalStorage
 * を指定のキーで検索し、JSONがすでに登録されて
 * いる場合には、そのJSONからオブジェクトを復元し
 * 初期値のオブジェクトとしてください。
 */
const KEY = "test-data";

class DataSource {
  static getLocal = (key) => {
    console.log("get from local");
    return JSON.parse(localStorage.getItem(key));
  };

  static setLocal = (key, target) => {
    console.log("set to local");
    localStorage.setItem(key, JSON.stringify(target));
  };
}

const handler = {
  set: (target, prop, value, receiver) => {
    // target[prop] = value;
    const result = Reflect.set(target, prop, value, receiver);
    // localStorage.setItem(KEY, JSON.stringify(target));
    DataSource.setLocal(KEY, target);
    return result;
  },
};

// const getLocal = (key) => {
//   console.log("get from local");
//   return JSON.parse(localStorage.getItem(key));
// };
const init = DataSource.getLocal(KEY) || {};
const pxy = new Proxy(init, handler);

console.log("init", pxy);
pxy.name = "Tom";
console.log("change", pxy);
pxy.name = "Tim";
console.log("change2", pxy);
