// tenemos una lista y sus pointers: 1 -> 2 -> 3 -> 4 -> 5 -> null
//el null nos es un espacio que puede ser utilizado para agregar más nodos.

//Singly: por que apunta a una sola dirección, no en doble.
let singlyLinkedListExample = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null
          }
        }
      }
    }
  }
}

//Estructura para crear una singlyLinkedList ->
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }

    this.tail = this.head;

    //conteo de elementos:
    this.length = 1; //por default tenemos un nodo
  }

  //methods:
  append(value) { //agregar elementos al final, nueva cola
    const newNode = new Node(value);

    this.tail.next = newNode; //generamos un new NODE  al final
    this.tail = newNode; //posicionamos el new Node en la cola
    this.length++;

    return this;
  }

  prepend(value) { //agrega elemento al princicipio
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  //Nodos intermedios:debemos manejar el garbage-collector para evitar que nodos desaparezcan:
  insert(index, value) {
    if (index >= this.length) { //cuando no hay suficientes elementos, agregamos el nodo al final:
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value); // Nodo nuevo
    const firstPointer = this.getTheIndex(index - 1); //Nodo anterior al index
    const holdingPointer = firstPointer.next; //Nodo que queda colgando

    firstPointer.next = newNode; //Nodo anterior en next ahora es el nuevo nodo
    newNode.next = holdingPointer; //next de newNode ahora es el nodo que esta colgango (sin apuntador)

    this.length++;
  }

  getTheIndex(index) {//searchNode
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    console.log(this.toString()); //1 -> 2 -> 6 -> 3 -> 4 -> null
    let currentNode = this.head;
    const firstPointer = this.getTheIndex(index - 1); //Nodo anterior al index
    console.log("firstPointer", firstPointer)

    // let counter = 0;
    // while (counter !== index) {
    //   currentNode = currentNode.next;
    //   counter++;
    // } con for queda ->

    for (let i = 0; i < this.length; i++) {
      if (i < index) {
        currentNode = currentNode.next;

      }
    }
    // console.log("currentNode:", currentNode)
    // console.log("currentNode.next:", currentNode.next)

    const holdingPointer = currentNode.next;
    // console.log("holdingPointer:", holdingPointer)
    firstPointer.next = holdingPointer;
    // console.log("currentNode.value", currentNode.value)
    this.append(currentNode.value)
    console.log("result", this.toString()); //1 -> 2 -> 6 -> 3 -> 4 -> null

  }

  remove2(index) {
    if (index >= this.length) {
      console.error("index is out of limits of the array");
    } else if (index == 0) {
      this.head = this.head.next;
      this.length--
    }

    else if (index === this.length - 1) {
      const firstPointer = this.getTheIndex(index - 1);
      firstPointer.next = null;

      this.tail = firstPointer;
      this.length--;
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const pointerToRemove = firstPointer.next;
      firstPointer.next = pointerToRemove.next;
      this.length--;
    }
  }

  toString() {
    let current = this.head
    let linkedList = `${[current.value]} -> `

    while (current.next) {
      current = current.next
      linkedList += `${[current.value]} -> `
    }

    linkedList += 'null'

    return linkedList
  }
}

//instancia
let myLinkedList = new MySinglyLinkedList(1);
// console.log(myLinkedList)
myLinkedList.append(2);
myLinkedList.append(6);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.toString()
// console.log(myLinkedList)
// console.log(myLinkedList)
// myLinkedList.insert(2, 5)
// myLinkedList.prepend(0);
// console.log(myLinkedList)
// myLinkedList.toString()

myLinkedList.remove(2)
