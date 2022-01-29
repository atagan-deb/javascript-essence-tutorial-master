// マクロタスク => タスクキュー
// マイクロタスク => ジョブキュー: 非同期処理を管理する待ち行列

setTimeout(function task1() {
  console.log("task1");
}); // マクロタスク

new Promise(function promise(resolve) {
  console.log("promise");
  resolve();
}).then(function job1() {
  console.log("job1");
}); // マイクロタスク

console.log("global end");

// global(コールスタック) => MicroTasks(ジョブキュー) => MacroTasks(タスクキュー)
// コールスタックをすべて消化、マイクロタスクをすべて消化、マクロタスクを一つ消化
// そのあと、コールスタックとマイクロタスクにジョブがないか確認
// ジョブがあれば消化、なければマクロタスクのジョブを一つ消化