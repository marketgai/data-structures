var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;

  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.stackSize++;
    this.storage[this.stackSize] = value;
  },
  pop: function() {
    if (this.stackSize > 0) {
      let removedVal = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--;
      return removedVal;
    }
  },
  size: function() {
    return this.stackSize;
  }
};
