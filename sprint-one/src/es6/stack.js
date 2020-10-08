class Stack {

  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }

  push(value) {
    this.stackSize++;
    this.storage[this.stackSize] = value;
  }

  pop() {
    if (this.stackSize > 0) {
      let removedVal = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--;
      return removedVal;
    }
  }

  size() {
    return this.stackSize;
  }

}