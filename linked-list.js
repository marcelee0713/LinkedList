import { Node } from "./node.js";
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  prepend(value) {
    if (this.head === null) {
      const node = new Node(value);
      this.head = node;
      return this;
    }

    const oldNode = this.head;
    const newNode = new Node(value, oldNode);
    this.head = newNode;
  }

  append(value) {
    if (this.head === null) {
      const node = new Node(value);
      this.head = node;
      return this;
    }

    const lastNode = this.getTail();
    const newLastNode = new Node(value);
    lastNode.nextNode = newLastNode;
  }

  getTail() {
    if (this.head === null) {
      return "There is no tail";
    }

    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  getHead() {
    if (this.head === null) {
      return "There is no head";
    }
    const headNextNodeValue =
      this.head.nextNode === null ? null : this.head.nextNode.value;
    const headValue = this.head.value;
    const head = new Node(headValue, headNextNodeValue);
    return head;
  }

  size() {
    if (this.head === null) {
      return "There is no linked list";
    }
    let nodeCount = 1;
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
      nodeCount++;
    }
    return nodeCount;
  }

  at(index) {
    if (this.head === null) {
      return "There is no linked list";
    } else if (index === 0) {
      return this.getHead();
    } else if (index > this.size() - 1) {
      return "Out of bounds";
    } else if (!index) {
      return "Input an index please";
    }
    let nodeCount = 0;
    let pointer = this.head;
    while (nodeCount !== index) {
      pointer = pointer.nextNode;
      nodeCount++;
      if (nodeCount === index) {
        const nodeValue = pointer.value;
        const nodeNextValue =
          pointer.nextNode === null ? null : pointer.nextNode.value;
        const nodeInIndex = new Node(nodeValue, nodeNextValue);
        return nodeInIndex;
      }
    }
  }

  pop() {
    if (this.head === null) {
      return "There is no linked list";
    }
    if (this.size() === 1) {
      return (this.head = null);
    }
    let pointer = this.head;
    let prev = null;
    let nodeCount = 0;
    const nodeLength = this.size() - 1;

    while (pointer.nextNode !== null) {
      prev = pointer;
      pointer = pointer.nextNode;
      nodeCount++;
      if (nodeCount === nodeLength) {
        prev.nextNode = null;
        return;
      }
    }
  }

  contains(value) {
    if (this.head === null || !value) {
      return "There is no linked list";
    }
    let pointer = this.head;
    let nodeCount = 0;
    while (nodeCount !== this.size()) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
      nodeCount++;
    }

    return false;
  }

  find(value) {
    if (this.head === null || !value) {
      return "There is no linked list";
    }
    let pointer = this.head;
    let nodeCount = 0;
    while (nodeCount !== this.size()) {
      if (pointer.value === value) {
        return nodeCount;
      }
      pointer = pointer.nextNode;
      nodeCount++;
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      return "There is no linked list";
    }
    let str = "";
    let pointer = this.head;
    let nodeCount = 0;
    while (nodeCount !== this.size()) {
      let getValue = pointer.value.toString();
      str = str.concat(`(${getValue})`, " -> ");
      pointer = pointer.nextNode;
      nodeCount++;
    }
    return str.concat("null");
  }

  insertAt(value, index) {
    if (index > this.size() || index < 0) {
      return "Invalid Index. Preferably beside the first or last index.";
    } else if (index === 0) {
      return this.prepend(value);
    } else if (index === this.size()) {
      return this.append(value);
    }

    let pointer = this.head;
    let nodeCount = 0;
    let prev = null;
    while (pointer.nextNode !== null) {
      prev = pointer;
      pointer = pointer.nextNode;
      nodeCount++;
      if (nodeCount === index) {
        const newNode = new Node(value, pointer);
        prev.nextNode = newNode;
      }
    }
  }

  removeAt(index) {
    if (index >= this.size() || index < 0) {
      return "Out of bound index";
    } else if (index === 0) {
      return (this.head = this.head.nextNode);
    } else if (index === this.size() - 1) {
      return this.pop();
    }
    let pointer = this.head;
    let nodeCount = 0;
    let prev = null;
    while (pointer.nextNode !== null) {
      prev = pointer;
      pointer = pointer.nextNode;
      nodeCount++;
      if (nodeCount === index) {
        const indexNextNode = pointer.nextNode;
        prev.nextNode = indexNextNode;
      }
    }
  }
}

const myLinkedList = new LinkedList();

myLinkedList.prepend(1);
myLinkedList.append(50);
myLinkedList.prepend(2);

console.log(myLinkedList.getTail());
console.log(myLinkedList.getHead());
console.log(myLinkedList.size());
console.log(myLinkedList.at(1));
console.log(myLinkedList.contains(1));
console.log(myLinkedList.find(50));
console.log(myLinkedList.toString());
myLinkedList.insertAt(500, 3);
myLinkedList.insertAt(20, 2);
console.log(myLinkedList.toString());
myLinkedList.removeAt(3);
myLinkedList.removeAt(2);
console.log(myLinkedList.toString());
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
console.log(myLinkedList.toString());
