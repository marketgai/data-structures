class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.tail++;
    this.storage[this.tail] = value;
  }

  dequeue() {
    this.head++;
    if (this.tail - this.head > 0) {
      let removedVal = this.storage[this.head];
      delete this.storage[this.head];
      return removedVal;
    }
  }

  size() {
    if (this.tail - this.head <= 0) {
      return 0;
    } else {
      return this.tail - this.head;
    }
  }
}
