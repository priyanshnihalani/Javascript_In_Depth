const person = {
    name: 'John',
    greet: function(message, punctuation) {
      console.log(`${message}, my name is ${this.name} ${punctuation}`);
    }
  };
  
  person.greet.apply({ name: 'Alice' }, ['Hi', "!"]); // Output: Hi, my name is Alice!