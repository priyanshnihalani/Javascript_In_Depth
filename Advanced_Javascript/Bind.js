const person = {
    name: 'John',
    greet: function(message, punctuation) {
      console.log(`${message}, my name is ${this.name}${punctuation}`);
    }
  };
  
  const greetAlice = person.greet.bind({ name: 'Alice' }, 'Hello', '!');
  greetAlice(); // Output: Hello, my name is Alice!