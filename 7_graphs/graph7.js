// edge list, adj list y adj matrix
class Graph {
  constructor() {
    this.nodes = 0;
    this.edgeList = [];
    this.adjList = {};
    this.adjMatrix = {};
  }
  addVertex(node) {
    this.adjList[node] = [];
    this.adjMatrix[node] = [];
    this.updateAM(node);
    this.nodes++;
  }
  updateAM(node) {
    for (let i = 0; i < this.nodes; i++) {
      this.adjMatrix[node].push(0);
    }
    for (let key in this.adjMatrix) {
      this.adjMatrix[key].push(0);
    }
  }
  addConex(node1, node2) {
    if (!this.adjList[node1]) this.addVertex(node1);
    if (!this.adjList[node2]) this.addVertex(node2);
    if (this.adjList[node1].includes(node2))
      return console.error(`${node1} y ${node2} ya están conectados`);
    this.addEL(node1, node2);
    this.addAL(node1, node2);
    this.addAM(node1, node2);
    return this;
  }
  addEL(node1, node2) {
    const pair1 = [node1, node2];
    const pair2 = [node2, node1];
    this.edgeList.push(pair1, pair2);
  }
  addAL(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }
  addAM(node1, node2) {
    let pos1 = 0, pos2 = 0;
    for (let key in this.adjMatrix) {
      if (key == node1) break;
      pos1++;
    }
    for (let key in this.adjMatrix) {
      if (key == node2) break;
      pos2++;
    }
    this.adjMatrix[node1][pos2] = 1;
    this.adjMatrix[node2][pos1] = 1;
  }
}