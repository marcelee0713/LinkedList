class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  list = [];

  append(value) {
    if (this.list.length === 0) {
      const node = new Node(value);
      this.list.push(node);
    } else {
      let tailIndex = this.list.length - 1;
      this.list[tailIndex].nextNode = value;

      const node = new Node(value);
      this.list.push(node);
    }
  }

  prepend(value) {
    if (this.list.length === 0) {
      const node = new Node(value);
      this.list.push(node);
    } else {
      const fIndexValue = this.list[0].value;
      const node = new Node(value, fIndexValue);
      this.list.unshift(node);
    }
  }

  size() {
    if (this.list.length === 0) return null;
    return this.list.length;
  }

  head() {
    if (this.list.length === 0) return null;
    return this.list[0];
  }

  tail() {
    if (this.list.length === 0) return null;
    return this.list[this.list.length - 1];
  }

  at(index) {
    if (index < 0 || index >= this.list.length) {
      return null;
    }
    return this.list[index];
  }

  pop() {
    this.list.pop();
    if (this.list.length === 0) {
      return null;
    }
    this.list[this.list.length - 1].nextNode = null;
    return this.list;
  }

  contains(value) {
    let exist = false;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) {
        exist = true;
        break;
      }
    }

    return exist;
  }

  find(value) {
    let exist = null;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) {
        exist = i;
        break;
      }
    }

    return exist === null ? null : "The index of this node is: " + exist;
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.list.length; i++) {
      let valueToString = this.list[i].value.toString();
      str = str.concat(`( ${valueToString} )`, " -> ");
    }
    return str.concat("null");
  }

  // Extra Credits

  insertAt(value, index) {
    if (index > this.list.length || index < 0) {
      return "Invalid Index. Preferably beside the first or last index.";
    } else if (index === 0) {
      const besideValue = this.list[index].value;
      const node = new Node(value, besideValue);
      this.list.unshift(node);
      return;
    } else if (index === this.list.length) {
      const node = new Node(value, null);
      this.list.splice(index, 0, node);
      this.list[index - 1].nextNode = this.list[index].value;
      return;
    }
    const besideValue = this.list[index].value;
    const node = new Node(value, besideValue);
    this.list.splice(index, 0, node);

    // Update our Left Node's "nextNode"
    this.list[index - 1].nextNode = this.list[index].value;
  }

  removeAt(index) {
    if (index >= this.list.length || index < 0) {
      return "Invalid Index";
    } else if (index === 0) {
      this.list.splice(index, 1);
      return;
    } else if (index === this.list.length - 1) {
      const leftIndex = index === 1 || index === 0 ? 0 : index - 1;
      this.list.splice(index, 1);
      this.list[leftIndex].nextNode = null;
      return;
    }

    const leftIndex = index === 1 || 0 ? 0 : index - 1;
    const rightIndex = index === this.list.length ? this.list.length : index;

    this.list.splice(index, 1);
    this.list[leftIndex].nextNode = this.list[rightIndex].value;
  }
}

const myLinkedList = new LinkedList();

// I know you're not suppose to use array. But in the first attempt I did and which is wrong.
