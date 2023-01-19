class Node {
  constructor(value) {
    this.value = value;
    this.next = null;  //se comporta como una linkedList
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * peek method
   * seleccionar el último entrar que es el primero en salir
   */
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top; //guardamos el último elemento que será penultimo luego de agregar el nuevo, evitamos perderlo con el garbage collector
      this.top = newNode; //ahora el último es el nuevo Nodo
      this.top.next = holdingPointer; //el siguiente en la pila hacia abajo es holdingPointer
    }

    this.length++;
    return this; //devuelve el stack
  }

  pop() {
    if (!this.length) {
      console.error("There is no nodes in the stack.")
    }
    const topNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return topNode;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.peek();
console.log(myStack)