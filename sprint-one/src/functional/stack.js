var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //create a key value pair numerically
    stackSize++;
    storage[stackSize] = value;
  };

  someInstance.pop = function() {
    let popped = storage[stackSize];
    delete storage[stackSize];
    if (stackSize > 0) {
      stackSize--;
    }
    return popped;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};

