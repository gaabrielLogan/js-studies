let promise1 = new Promise(resolve => setTimeout(resolve, 100, 'one'));
let promise2 = new Promise(resolve => setTimeout(resolve, 200, 'two'));

Promise.all([promise1, promise2]).then(values => {
  console.log(values)
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value)
});
