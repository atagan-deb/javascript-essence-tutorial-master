// タスクキュー：非同期処理の実行順を管理
// FIFO

const btn = document.querySelector("button");
btn.addEventListener("click", function task2() {
  console.log("task2 done");
});

function a() {
  setTimeout(function task1() {
    console.log("task1 done");
  }, 4000);

  const startTime = new Date();
  while (new Date() - startTime < 5000);

  console.log("fn a done");
}

a();

// コールスタックにコンテキストが積まれている間はタスクキューからイベントループを通じて
// コールスタックにタスクを渡すことができない
// コールスタックでは順次タスクが消化されていく