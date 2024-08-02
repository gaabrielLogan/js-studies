function higherOrder(fn) {
    return function(name) {
      return fn(name);
    };
  }
  
  const greet = (name) => `Hello, ${name}!`
  const greetWithHigherOrder = higherOrder(greet)
  
  console.log(greetWithHigherOrder('Dave'))
  