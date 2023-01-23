class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() { //toma el primer elemento de la fila
    return this.first;
  }

  enqueue(value) {//agregar elemento al final de la fila
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; //corremos el último a penúltimo y agregamos el nuevo nodo
      this.last = newNode;
    }
    this.length++;

    return this;
  }

  dequeue() { //remover al primer elemento de fila
    if (this.length === 0) {
      console.error('Empty queue.')
    }
    else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.peek();