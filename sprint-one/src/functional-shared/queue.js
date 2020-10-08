var Queue = function() {
  var someInstance = {
    storage: {},
    queueIn: 0,
    queueOut: 0
  };

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {

    this.storage[this.queueIn] = value;
    this.queueIn++;
  },
  dequeue: function() {
    if (this.queueIn >= this.queueOut) {
      let removedVal = this.storage[this.queueOut];
      delete this.storage[this.queueOut],
      this.queueOut++;
      return removedVal;
    }
  },
  size: function() {
    if (this.queueIn - this.queueOut < 0) {
      return 0;
    } else {
      return (this.queueIn - this.queueOut);
    }
  }
};


