class Animal {
    constructor(name) {
      this.name = name
    }
  
    speak() {
      return `${this.name} makes a noise.`
    }
  }
  
  class Dog extends Animal {
    speak() {
      return `${this.name} barks.`
    }
  }
  
  const dog = new Dog('Rex')
  console.log(dog.speak());
  