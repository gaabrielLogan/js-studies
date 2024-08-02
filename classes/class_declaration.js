class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
  }
  
  const alice = new Person('Logan', 999)
  console.log(alice.greet())
  