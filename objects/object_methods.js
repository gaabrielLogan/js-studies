let person = {
    name: 'Gabriel',
    greet() {
      return `Hello, my name is ${this.name}.`
    }
  };
  
  console.log(person.greet())