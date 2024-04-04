// Creating Prototype
const personproto = {
  greet(){
    console.log(`Hello`)
  }
}
const carl = Object.create(personproto);
carl.greet();
console.log(typeof carl)
console.log(Object.getPrototypeOf(carl))

// Shadowing Prototype
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

// Using Constructor

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
console.log(Person.prototype)

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

// hasOwn Method to check if a property is owned by an object
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
