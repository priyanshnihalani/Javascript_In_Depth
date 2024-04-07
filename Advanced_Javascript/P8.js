function SetUserName(username) {
  this.username = username;
  console.log("Hello");
}
function userinfo(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
}
const info = new userinfo("Priyansh", "oqibz@example.com", "priyansh@123");
console.log(info);
