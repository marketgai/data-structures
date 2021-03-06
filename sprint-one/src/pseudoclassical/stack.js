var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function (value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    let removedVal = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return removedVal;
  }
};

Stack.prototype.size = function() {
  if (this.stackSize < 0 ) {
    return 0;
  } else {
    return this.stackSize;
  }
};

var instance = new Stack();
