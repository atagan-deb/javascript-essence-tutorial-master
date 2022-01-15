let l;
for (let i = 0; i < 5; i++) {
  const j = i * 2;
  var k = i * 2;
  l = i * 2;
  setTimeout(function () {
    console.log(j, k, l);
  }, 1000);
}
