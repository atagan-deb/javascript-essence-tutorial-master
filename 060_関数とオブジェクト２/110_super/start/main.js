class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        // this.gender = gender; // error まず、superを呼び出す
        super(name, age); // 親のコンストラクタを呼び出す 必須
        this.gender = gender;
    }

    hello() {
        console.log('Konnichiwa ' + this.name);
        super.hello(); // 親のメソッドを呼び出す
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();

const american = {
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    hello() {
        // 初期化時(オブジェクトリテラル内)のみsuperが使用可能
        super.hello();
    }
}
Object.setPrototypeOf(bob, american); // americanのプロトタイプをbobに追加
bob.hello()
