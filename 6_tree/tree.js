// Vamos a construir el siguiente nodo:

//      10
//   4     20
// 2  8  17  170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    //existe un nodo ? entonces ya hay root: 
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root; //con esta variable recorremos el árbol
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) { //validacion nodo izquierdo
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left; //si existe left bajamos en el árbol
        } else { //cuando el nodo incrementa va a la derecha
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          //si ya existe un nodo de lado derecho entonces:
          currentNode = currentNode.right;
        }
      }
    }
  }

  //metodo Search: si le paso un valor debe devolver el nodo en el que está.
  search(value) {

    let currentNode = this.root;
    if (!this.root) return 'tree Empty.'
    if (currentNode.value === value) return currentNode;

    while (currentNode && currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        if (currentNode && currentNode.value === value) return currentNode;
      } else {
        currentNode = currentNode.right;
        if (currentNode && currentNode.value === value) return currentNode;
      }
    }
    return 'Node not found.'
  }

  delete(value) {
    let currentNode = this.root;

    if (currentNode.value === value) {
      currentNode.value = null;
    };

    while (currentNode && currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        if (currentNode && currentNode.value === value) {
          currentNode.value = null
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode && currentNode.value === value) {
          currentNode.value = null
        }
      }
    }

    console.log("Node removed");
    return currentNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4)
tree.insert(20)
tree.insert(2)
tree.insert(8)
tree.insert(17)
tree.insert(170)
tree.search(20)