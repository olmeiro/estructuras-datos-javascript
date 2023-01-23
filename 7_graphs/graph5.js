//version de grafos ipo AdjacentList con algunas mejoras para evitar redundancia de validaciones:p.s.permite agragar edges individuales o multiples si se envía un array

class AdjacentList {
  constructor() {
    this.graph = {}
    this.length = 0
  }
  addVertex(value) {
    if (!this.graph[value]) {
      this.graph[value] = []
      this.length++
    }
    return this
  }
  addEdge(vertex, edges) {
    if (this.graph[vertex]) {
      if (!Array.isArray(edges)) {
        edges = [edges]
      }
      edges.forEach(edge => {
        if (this.graph[edge]) {
          const existEdge = this.graph[vertex]
            .find(ele => ele == edge)
          if (existEdge == undefined) {
            this.graph[vertex].push(edge)
            this.graph[edge].push(vertex)
          }
        }
      })
    }
    return this
  }
}

const myGraph = new AdjacentList()
myGraph.addVertex(1)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)
myGraph.addVertex(8)
myGraph.addEdge(8, 4)
myGraph.addEdge(4, [1, 5, 8])
myGraph.addEdge(1, [4, 3, 6])
myGraph.addEdge(6, [1, 3])
myGraph.addEdge(5, [4, 3])