/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 *
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 *
 * の値が順番にコンソールに表示されます。
 */

// これはジェネレーター
// function* genStep(min = 0, max = 200, step = 1) {
//   for (let i = min; i <= max; i += step) {
//     yield i;
//   }
// }

function genStep(min = 0, max = 100, step = 1) {
  let i = min - step;
  return {
    next() {
      i += step;
      if (i > max) {
        return {
          done: true,
        };
      } else {
        return {
          done: false,
          value: i,
        };
      }
    },
  };
}

const it = genStep(4, 10, 2);
let a = it.next();

while (!a.done && a.value < 100) {
  console.log(a.value);
  a = it.next();
}
