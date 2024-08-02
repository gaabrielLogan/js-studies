let promise = new Promise((resolve, reject) => {
    let success = true;
  
    if (success) {
      resolve('Promise fulfilled!');
    } else {
      reject('Promise rejected!');
    }
  });
  
  promise.then(message => {
    console.log(message); 
  }).catch(error => {
    console.log(error);
  });
  