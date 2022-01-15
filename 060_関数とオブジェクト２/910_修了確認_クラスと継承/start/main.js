/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 *
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 *
 * を内部で行います。
 *
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 *
 ****************************************
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 *
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

const normalUsers = ["Tim", "Bob", "Jenny"];
const adminUsers = ["golgo", "kenshiro"];
class User {
  constructor(name) {
    this.name = name;
    this.canLogin = [...normalUsers, ...adminUsers].some(
      (username) => name === username
    );
    this.redirectTo = "/";
    this.roll = "NORMAL";
  }
  login() {
    console.log(`User: ${this.name}`);
    return this.canLogin;
  }
  checkRoll() {
    console.log(`You have ${this.roll} roll!`);
    return true;
  }
  redirect() {
    console.log(`redirect: ${this.redirectTo}`);
    return true;
  }
}
// class User {
//   constructor(name) {
//     this.name = name;
//     this.canLogin = [...normalUsers, ...adminUsers].some(
//       (username) => name === username
//     );
//   }
//   login() {
//     console.log(`User: ${this.name}`);
//     return this.canLogin;
//   }
//   checkRoll() {
//     console.log("You have NORMAL roll!");
//     return true;
//   }
//   redirect() {
//     console.log("redirect: /");
//     return true;
//   }
// }

class AdminUser extends User {
  constructor(name) {
    super(name);
    this.redirectTo = "/admin";
    this.roll = "ADMIN";
  }
}

function loginController(user) {
  if (user.login() && user.checkRoll() && user.redirect()) {
    console.log("login success");
  } else {
    console.log("login failed");
  }
}

loginController(new User("Bob"));
loginController(new User("golgo"));
loginController(new User("hoge"));
loginController(new AdminUser("Tim"));
loginController(new AdminUser("kenshiro"));
loginController(new AdminUser("huga"));
