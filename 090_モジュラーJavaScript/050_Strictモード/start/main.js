// 'use strict'
// a = 0; // error
const a = 0;
console.log(a);

function fn() {
  // 'use strict'
  // b = 0;
  // const implements, interface, pachage
  return this;
}

fn();
console.log(fn.call(2));