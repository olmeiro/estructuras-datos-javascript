//ejemplo en typescript timado con genéricos algo más practico donde cada nodo tiene un id para las conexiones un value donde donde podemos añadir lo que queramos y un Set con las conexiones, uso un set para que no se repita nunca dos veces la misma.Para la adjacent list uso un Map que es algo que nos ofrece JavaScript de serie y es muy util es como un objeto pero ya preparado con sus funciones.Aparte añado funciones para añadir nodos, eliminar nodos, añadir o eliminar conexiones, modificar el valor de un nodo.

class Node<ID, T> {
  public connections = new Set<Node<ID, T>>();

  constructor(public id: ID, public value: T) {}

  addConnection(idNode: Node<ID, T>) {
    this.connections.add(idNode);
  }

  removeConnection(idNode: Node<ID, T>) {
    this.connections.delete(idNode);
  }
}

export class Graph<ID, T> {
  private nodes: number = 0;
  private adjacentList: Map<ID, Node<ID, T>> = new Map();

  constructor() {}

  addNode(id: ID, value: T): void {
    const newNode = new Node<ID, T>(id, value);
    this.adjacentList.set(id, newNode);
    this.nodes++;
  }

  addEdge(nodeId1: ID, nodeId2: ID): void {
    const node1 = this.adjacentList.get(nodeId1);
    const node2 = this.adjacentList.get(nodeId2);

    if (node1 && node2) {
      node1.addConnection(node2);
      node2.addConnection(node1);
    }
  }

  getNode(id: ID): T | undefined {
    return this.adjacentList.get(id)?.value;
  }

  getAllNodes(): T[] {
    return Array.from(this.adjacentList.values()).map((node) => node.value);
  }

  getConnections(id: ID): T[] {
    const node = this.adjacentList.get(id);
    if (node) {
      return Array.from(node.connections).map((node) => node.value);
    }
    return [];
  }

  deleteNode(id: ID): T | undefined {
    const nodeToRemove = this.adjacentList.get(id);
    if (nodeToRemove) {
      nodeToRemove.connections.forEach((node) =>
        node.removeConnection(nodeToRemove)
      );
      this.adjacentList.delete(id);
      this.nodes--;
      return nodeToRemove.value;
    }
    return undefined;
  }

  removeConnection(nodeId1: ID, nodeId2: ID): void {
    const node1 = this.adjacentList.get(nodeId1);
    const node2 = this.adjacentList.get(nodeId2);

    if (node1 && node2) {
      node1.removeConnection(node2);
      node2.removeConnection(node1);
    }
  }

  editNodeValue(id: ID, value: T): void {
    const node = this.adjacentList.get(id);
    if (node) {
      node.value = value;
    }
  }

  get length(): number {
    return this.nodes;
  }
}

interface User {
  id: number;
  name: string;
  age: number;
}

const myGraph = new Graph<number, User>();
myGraph.addNode(1, { id: 1, name: "John", age: 30 });
myGraph.addNode(3, { id: 3, name: "Mike", age: 20 });
myGraph.addNode(4, { id: 4, name: "Mary", age: 40 });
myGraph.addNode(5, { id: 5, name: "Bob", age: 50 });
myGraph.addNode(6, { id: 6, name: "Sam", age: 60 });
myGraph.addNode(8, { id: 8, name: "Tom", age: 70 });

myGraph.addEdge(1, 3);
myGraph.addEdge(1, 4);
myGraph.addEdge(1, 6);
myGraph.addEdge(3, 4);
myGraph.addEdge(3, 5);
myGraph.addEdge(3, 6);
myGraph.addEdge(4, 1);
myGraph.addEdge(4, 5);
myGraph.addEdge(5, 4);
myGraph.addEdge(5, 3);
myGraph.addEdge(6, 1);
myGraph.addEdge(6, 3);
myGraph.addEdge(8, 4);

console.log(myGraph);
console.log("Get value node 1: ", myGraph.getNode(1));
console.log("Get Connections node 1: ", myGraph.getConnections(1));
console.log("Deleting node 3: ", myGraph.deleteNode(3));
console.log("Get Connections node 1: ", myGraph.getConnections(1));
console.log(myGraph);
console.log("Removing connection 1 - 6");
myGraph.removeConnection(1, 6);
console.log("Get Connections node 1: ", myGraph.getConnections(1));

console.log("Get all values: ", myGraph.getAllNodes());

console.log(myGraph.length);
