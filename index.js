class Node {
  constructor(value = null){
  this.value = value;
  this.nextNode = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }
  append(value){
    const newNode = new Node(value);
    if (this.head === null){
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null){
      current = current.nextNode;
    }
    current.nextNode = newNode;
    this.size++;
  }
  remove(value){
    if (this.head === null) return;
    if (this.head.value === value){
      this.head = this.head.nextNode;
      this.size--;
      return;
    } 
    let current = this.head;
    while (current.nextNode !== null){
      if (current.nextNode.value === value){
        current.nextNode = current.nextNode.nextNode;
        this.size--;
        return;
      }
      current = current.nextNode;
    }
  }

  getSize(){
    return this.size;
  }

  getHead(){
    return this.head ? this.head.value : null;
  }

  getTail(){
    if  (this.head === null){
      return null;
    }
    let current = this.head;
    while(current.nextNode !== null){
      current = current.nextNode;
    }
    return current.value;
  }

  at(index){
    if (index < 0 || index >= this.size){
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current !== null){
      if (count === index){
      return current.value;
      }
    current = current.nextNode;
    count++;
    }
    return null;
  }

  pop(){
    if (this.head === null){
      return null;
    }

    if (this.head.nextNode === null){
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }
    
    let current = this.head;
    while (current.nextNode.nextNode !== null){
      current = current.nextNode;
    }

    const value = current.nextNode.value;
    current.nextNode = null;
    this.size--;
    return value;
  }

  contains(value){
    let current = this.head;
    while (current !== null){
      if (current.value === value){
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value){
    let current = this.head;
    while (current !== null){
      if (current.value === value){
        return current;
      }
      current = current.nextNode;
    }
    return null;
  }

  toString(){
    const nodes = [];
    let current = this.head;
    while (current != null){
      nodes.push(current.value);
      current = current.nextNode;
    }
    console.log(nodes.join(" -> "));
  }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(4);
ll.toString();
console.log(ll.getSize());
console.log(ll.getHead());
console.log(ll.getTail());
console.log(ll.at(4));
console.log(ll.pop());
ll.toString();
console.log(ll.contains(4));
console.log(ll.find(4));