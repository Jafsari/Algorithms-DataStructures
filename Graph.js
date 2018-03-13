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
    breadthFirstSearch(start){
      var queue = [start];
      var result = [];
      var visited = {};
      var currentVertex;
      
      visited[start] = true;
      
      while(queue.length){
        currentVertex = queue.shift()
        result.push(currentVertex);
        
        for(var i = 0; i < this.adjacencyList[currentVertex].length ; i ++){
          var value = this.adjacencyList[currentVertex][i]
          if(!visited[value]){
            visited[value] = true
            queue.push(this.adjacencyList[currentVertex][i])
          }
        }
      }
      return result
    }
    depthFirstSearch(start){
      var stack = [start];
      var result = [];
      var visited = {};
      var currentVertex;
      
      visited[start] = true;
      
      while(stack.length){
        currentVertex = stack.pop()
        result.push(currentVertex)
        
        for(var i = 0; i < this.adjacencyList[currentVertex].length ; i++){
          var value = this.adjacencyList[currentVertex][i]
          if(!visited[value]){
            visited[value] = true;
            stack.push(this.adjacencyList[currentVertex][i])
          }
        }
      }
    return result
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
  cool.addEdge(2,9)
  console.log(cool.breadthFirstSearch(2))
  console.log(cool.depthFirstSearch(2))
  console.log(cool)