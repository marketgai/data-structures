var Queue = function() {
  var someInstance = {};
  var queueBack = 0;
  var queueFront = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueBack++;
    storage[queueBack] = value;
  };

  someInstance.dequeue = function() {
    if (queueFront <= queueBack) {
      queueFront++;
      let dequeued = storage[queueFront];
      delete storage[queueFront];
      return dequeued;
    }
  };

  someInstance.size = function() {
    if (queueBack - queueFront < 0) {
      return 0;
    } else {
      return (queueBack - queueFront);
    }
  };

  return someInstance;
};
