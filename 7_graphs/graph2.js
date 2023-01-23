//Mirar el ejercicio en Notion
// https://www.notion.so/curso-estructuras-datos-Js-935e1aeb6de34d268158add4df2286fd
class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  //methods:
  addVertex(node) {//crea los nodos por indices
    this.adjacentList[node] = [];
    this.nodes++;
  }

  //agregar edges (bordes) conexiones entre nodos:
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();
myGraph.addVertex("1")
myGraph.addVertex("3")
myGraph.addVertex("4")
myGraph.addVertex("5")
myGraph.addVertex("6")
myGraph.addVertex("8")

//agregamos bordes(conexiones)
myGraph.addEdge("5", "3")
myGraph.addEdge("6", "3")
myGraph.addEdge("6", "1")
myGraph.addEdge("3", "1")
myGraph.addEdge("1", "4")
myGraph.addEdge("5", "4")
myGraph.addEdge("4", "8")