let promise = new Promise((resolve, reject) => {
    resolve('Success!');
  });
  
  promise
    .then(message => {
      console.log(message); 
      return 'Another success!';
    })
    .then(anotherMessage => {
      console.log(anotherMessage); 
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('This will always run.'); 
    });
  