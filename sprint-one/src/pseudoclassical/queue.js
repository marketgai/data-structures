var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.tail++;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function() {
  if (this.tail - this.head > 0) {
    this.head++;
    let removedVal = this.storage[this.head];
    delete this.storage[this.head];
    return removedVal;
  }
};

Queue.prototype.size = function() {
  if (this.tail - this.head < 0) {
    return 0;
  } else {
    return this.tail - this.head;
  }
};

var instance = new Queue;

