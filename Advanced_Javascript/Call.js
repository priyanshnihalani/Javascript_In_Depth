const person = {
    name: 'John',
    greet: function(message) {
      console.log(`${message}, my name is ${this.name}`);
    }
  };
  
  person.greet('Hello'); // Output: Hello, my name is John
  person.greet.call({ name: 'Alice' }, 'Hi'); // Output: Hi, my name is Alice