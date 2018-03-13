class Graph{
    constructor(){
      this.vertices = [];
      this.adjacencyList = {};
    }
    addVertex(vertex){
      this.vertices.push(vertex)
      this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    }
    removeVertex(vertex){
    var index = this.vertices.indexOf(vertex);
    if(index > -1){ 
    this.vertices.splice(index, 1);
  }
    while(this.adjacencyList[vertex].length) {
      var adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
      console.log(adjacentVertex)
    }
    }
    removeEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1]){
      if(this.adjacencyList[vertex1].indexOf(vertex2))
      this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2),1)
    } else {
      return -1
    }
    if(this.adjacencyList[vertex2]){
      if(this.adjacencyList[vertex2].indexOf(vertex1)){
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1),1)
      }
      } else {
        return -1
      }
    }
  }
  
  var cool = new Graph();
  cool.addVertex(2)
  cool.addVertex(3)
  cool.addVertex(5)
  cool.addVertex(7)
  cool.addVertex(9)
  cool.addEdge(2,3)
  cool.addEdge(3,5)
  cool.addEdge(5,7)
  cool.addEdge(7,9)
  cool.removeVertex(3)
  
  console.log(cool)