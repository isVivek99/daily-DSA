class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  addStart(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  addEnd(value) {
    const node = new Node(value);
    let current = this.head;
    if (current === null) {
      this.head = node;
      return;
    }
    while (current !== null && current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  insertIndex(value, index) {
    if (index < 0 || index > this.size) return;
    const node = new Node(value);
    let current = this.head;
    if (current === null && index === 1) {
      current = node;
      return;
    }
    let currIndex = 0;
    while (current !== null) {
      currIndex++;
      let prev = current;
      current = current.next;
      if (currIndex === index) {
        prev.next = node;
        node.next = current;
      }
      break;
    }
  }
}

let ll = new LinkedList();

ll.addStart(2);
ll.addStart(3);
ll.addEnd(5);
ll.insertIndex(7, 0);

console.log(ll);
