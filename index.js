function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    return function namedFunction() {
      // Function body 
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body
    };
  }
  