/*
  Sea el Nodo:
   2 - 0
  / \
 1 - 3
*/

// Formas de representar un grafo:
//Representación Edge List: representa las conexiones en arrays del grafo
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];

//Representación Adjacent List:
//Cada nodo es un índice en la lista y se apuntas sus conexiones (edges)
//Tenemos las conexiones por indice ->
//Indices                   0      1       2         3   
const graphAdjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]]

//Representacion con HashTables (Key,value)
const graphHashTable = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
}

//Representacion con Adjacen Matrix: para grafos ponderados y no ponderados
//si hay conexion = 1 sin conexion = 0
const graphAdjacentMatrix = [
  [0, 0, 1, 0], //indice cero conecta con 2
  [0, 0, 1, 1], //indice uno conecta con 2  y 3
  [1, 1, 0, 1], //indice dos conecta con 0, 1 y 3
  [0, 1, 1, 0], //indice tres conecta con 1 y 2
]

//ahora en objeto:
const graphAdjacent = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
}
