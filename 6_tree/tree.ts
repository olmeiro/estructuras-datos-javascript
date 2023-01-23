class Node<T> {
  public left: Node<T> | null;
  public right: Node<T> | null;

  constructor(public value: T) {}
}

export class BinarySearchTree<T> {
  private root: Node<T> | null = null;

  constructor() {}

  insert(value: T): void {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value: T): Node<T> | null {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          return null;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          return null;
        }
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  delete(value: T): Node<T> | null {
    if (this.root === null) {
      // tree is empty
      return null;
    }

    let currentNode = this.root;
    let currentNodePosition: "right" | "left";
    let parentNode = null;

    while (currentNode !== null) {
      //Empezamos a buscar el nodo y su padre
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          // No encontramos retornamos null
          return null;
        }
        parentNode = currentNode;
        currentNode = currentNode.left;
        currentNodePosition = "left";
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          // No encontramos retornamos null
          return null;
        }
        parentNode = currentNode;
        currentNode = currentNode.right;
        currentNodePosition = "right";
      } else {
        //A partir de aquí hemos encontrado el nodo a eliminar
        if (parentNode === null) {
          // El nodo a eliminar es el root
          if (currentNode.left === null && currentNode.right === null) {
            //No tiene hijos
            this.root = null;
            return currentNode;
          } else if (currentNode.left && currentNode.right) {
            //Tiene ambos hijos
            const nodeToChange = this.searchLeafToChange();
            nodeToChange.right = currentNode.right;
            nodeToChange.left = currentNode.left;
            this.root = nodeToChange;
            return currentNode;
          } else if (currentNode.left !== null) {
            //Solo tiene hijo a la izquierda
            this.root = currentNode.left;
            return currentNode;
          } else {
            //Solo tiene hijo a la derecha
            this.root = currentNode.right;
            return currentNode;
          }
        } else if (currentNode.left === null && currentNode.right === null) {
          //El nodo a eliminar es una hoja
          parentNode[currentNodePosition!] = null;
          return currentNode;
        } else if (currentNode.left && currentNode.right) {
          //El nodo a eliminar es intermedio y tiene ambos hijos
          const nodeToChange = this.searchLeafToChange();
          nodeToChange.left = currentNode.left;
          nodeToChange.right = currentNode.right;
          parentNode[currentNodePosition!] = nodeToChange;
          return currentNode;
        } else if (currentNode.left !== null) {
          //El nodo a eliminar es intermedio y solo tiene hijo a la izquierda
          parentNode[currentNodePosition!] = currentNode.left;
          return currentNode;
        } else {
          //El nodo a eliminar es intermedio y solo tiene hijo a la derecha
          parentNode[currentNodePosition!] = currentNode.right;
          return currentNode;
        }
      }
    }
    return currentNode;
  }

  //Busca el nodo más pequeño de la parte derecha del root, lo elimina y lo devuelve.
  private searchLeafToChange(): Node<T> {
    if (!this.root?.right) {
      return this.root!;
    }
    let currentNode = this.root.right;
    let parentNode = this.root;

    while (true) {
      if (currentNode.left !== null) {
        //Buscamos el nodo más pequeño
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.right === null) {
        //No tiene hijos estamos en una hoja
        parentNode.left = null;
        return currentNode;
      } else {
        //Tiene hijo a la derecha
        parentNode.left = currentNode.right;
        return currentNode;
      }
    }
  }
}

const tree = new BinarySearchTree<number>();

tree.insert(10);
//        10
tree.insert(4);
//        10
//     /
//   4
tree.insert(20);
//        10
//     /      \
//   4         20
tree.insert(2);
//        10
//     /      \
//   4         20
//  /
// 2
tree.insert(8);
//        10
//     /      \
//   4         20
//  /  \
// 2    8
tree.insert(17);
//        10
//     /      \
//   4         20
//  /  \      /
// 2    8   17
tree.insert(170);
//        10
//     /      \
//   4         20
//  /  \      /  \
// 2    8   17    170

// console.log(tree);

//Probando a borrar una hoja el número 8
// console.log('search value 8: ', tree.search(8));
// console.log('search value 4: ', tree.search(4));
// console.log('delete 8: ', tree.delete(8));
// console.log('search value 4: ', tree.search(4));
//        10
//     /      \
//   4         20
//  /         /  \
// 2        17    170

//Probando a borrar el root
// console.log(tree);
// console.log('delete root 10: ', tree.delete(10));
// console.log(tree);
//        17
//     /      \
//   4         20
//  /  \         \
// 2    8         170

//Probando a eliminar un nodo intermedio con ambos hijos el 20
// console.log('search root 10: ', tree.search(10));
// console.log('search value 20: ', tree.search(20));
// console.log('delete 20: ', tree.delete(20));
// console.log('search root 10: ', tree.search(10));
//        10
//     /      \
//   4         17
//  /  \         \
// 2    8         170
