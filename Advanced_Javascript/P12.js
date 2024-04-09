class User {
  constructor(name, age) {
    this.name = name;
    this.password = age;
  }
  get email() {
    return this.name + "@gmail.com";
  }
  set email(value) {
    this._name = value;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}
const oneuser = new User("Jack", "20df");
console.log("Email: " + oneuser.email);
console.log("Password: " + oneuser.password);
