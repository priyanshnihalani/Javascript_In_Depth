let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
descriptor.value = 3.15;
console.log(descriptor);
console.log(Math.PI);

const obj = {
  name: "John",
  age: 30,
  city: "New York",
  message: function () {
    console.log("Message from john");
  },
};
Object.defineProperty(obj, "age", {
  value: 35,
  // writable: false,
  // configurable: false,
  enumerable: false,
});
console.log(obj.age);
console.log(Object.getOwnPropertyDescriptor(obj, "age"));

for (let [key, value] of Object.entries(obj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
