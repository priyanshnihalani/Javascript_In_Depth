function User(name, password) {
  this._name = name;
  this._password = password;

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.replace(/./g, "*");
    },
    set: function (value) {
      this._password = value;
    },
  });
}
try {
  var user = new User("John", "pao");
  console.log(user.password); // Output: pa
} catch (error) {
  console.log(error.message);
}
