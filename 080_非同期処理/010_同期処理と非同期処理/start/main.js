// javascriptはMainスレッドで実行される
// MainスレッドではJavaScript => レンダリング
// 60fps(16.7ms)より処理が遅いと画面のチラツキが生じやすい

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log("sleep done");
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("button clicked");
});

setTimeout(() => sleep(3000), 2000);

// 非同期処理は一時的にメインスレッドから処理が切り離される
// 同期処理はメインスレッドで順次実行される