const user = {
  _email: "qpmzj@example.com",
  _password: "password",


  get password() {
    return this._password.length;
  },
  set password(value) {
    this._password = value;
  }
}

const tea = Object.create(user);
console.log(tea.password); // Output: 8

