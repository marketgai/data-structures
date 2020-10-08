var Stack = function() {
  var instance = {
    storage: {},
    stackSize: 0
  };
  _.extend(instance, stackMethods);
  return instance;
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


