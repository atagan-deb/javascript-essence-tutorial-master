const person = {
  name: "Tom",
  hello: function () {
    console.log(`Hello, ${this.name}`); // this: 呼び出し元のオブジェクトへの参照, this === person
  },
  hi: function () {
    console.log(`Hi, ${person.name}`); // 基本的にはthisを使うべき
  },
};

person.hello();
person.hi();

const { hello, hi } = person;

hello(); // 呼び出し元が参照できないため、thisが使用できない
hi(); // pershonは存在するため、参照可能