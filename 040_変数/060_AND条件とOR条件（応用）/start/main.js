function hello(name) {
  name = name || 'Tom';
  console.log(`Hello ${name}`);
}

hello();
hello('Bob')

let Bob;

Bob && hello(Bob);

let Jenny = 'Jenny'

Jenny && hello(Jenny);