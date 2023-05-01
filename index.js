// receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    }
  }
  