// grafo dirigido - ponderado

class graphD {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++
  }

  // Cost es el ponderado
  addEdge(from, to, Cost) {
    if (from == Number || to == Number || from <= this.nodes || to <= this.nodes || from >= 0 || to >= 0) {
      this.adjacentList[from][0] = { 'NameRoute': `${from} --> ${to}`, 'Cost': Cost };

      this.adjacentList[from][0].Route = this.adjacentList[to];
      return this
    }

  }

}

const graphd = new graphD();

graphd.addVertex(1);
graphd.addVertex(3);
graphd.addVertex(4);
graphd.addVertex(5);
graphd.addVertex(6);
graphd.addVertex(8);

graphd.addEdge(1, 6, 2)
graphd.addEdge(6, 3, 5)
graphd.addEdge(1, 3, 6)
graphd.addEdge(1, 4, 1)
graphd.addEdge(3, 5, 7)
graphd.addEdge(4, 5, 6)
graphd.addEdge(8, 4, 9)

// Aquí una pequeña lógica para evitar conexiones repetidas en el grafo:
addEdge(node1, node2) {
  this.#checkAndAddEdge(this.adjacentList[node1], node2);
  this.#checkAndAddEdge(this.adjacentList[node2], node1);

  return this;
}
#checkAndAddEdge(list, node) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == node) {
      return false;
    }
  }
  list.push(node);
  return true;
}

// con adjacent matrix
addVertex(node) {
  this.adjacentList[node] = [];
  this.keys.push(node);
  this.adjacentMatrix[node] = [];
  for (let i = 0; i < this.keys.length; i++) {
    this.adjacentMatrix[this.keys[i]] = new Array((this.nodes + 1)).fill('0');
  }
  this.nodes++;
}
addMatrix(node1, node2) {
  const index1 = this.keys.indexOf(node1);
  const index2 = this.keys.indexOf(node2);
  this.adjacentMatrix[node1][index1] = '1';
  this.adjacentMatrix[node1][index2] = '1';
  this.adjacentMatrix[node2][index1] = '1';
  this.adjacentMatrix[node2][index2] = '1';
}