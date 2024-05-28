class Node {
  constructor(value = null){
  this.value = value;
  this.nextNode = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  append(value){
    const newNode = new Node(value);
    if (this.head === null){
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null){
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }
  remove(value){
    if (this.head === null) return;
    if (this.head.value === value){
      this.head = this.head.nextNode;
      return;
    } 
    let current = this.head;
    while (current.nextNode !== null){
      if (current.nextNode.value === value){
        current.nextNode = current.nextNode.nextNode;
        return;
      }
      current = current.nextNode;
    }
  }
  display(){
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
ll.display();

ll.remove(2);
ll.display();