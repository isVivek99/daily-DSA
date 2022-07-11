class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.elements[this.tail] = value;
    this.tail += 1;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  peek() {
    //returns the latest element added to queue
    if (this.elements[this.head]) return this.elements[this.head];
    return null;
  }
  poll() {
    let item;
    if (this.elements[this.head]) {
      item = this.elements[this.head];
      delete this.elements[this.head];
      this.head += 1;
      return item;
    }
    return null;
  }
  length() {
    return this.tail - this.head;
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.poll());
console.log(queue.dequeue());
console.log(queue.length());
