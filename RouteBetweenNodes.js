class Graph{
    constructor(){
      this.vertices = [];
      this.adjacencyList = {};
    }
    addVertex(vertex){
      this.vertices.push(vertex);
      this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2){
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
    removeVertex(vertex){
      var index = this.vertices.indexOf(vertex);
      if (index > -1){
        this.vertices.splice(index,1);
      }
      while (this.adjacencyList[vertex].length){
        var adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(adjacentVertex,vertex);
      }
    }
    removeEdge(vertex1,vertex2){
      if(this.adjacencyList[vertex1]){
        if (this.adjacencyList[vertex1].indexOf(vertex2)){
          var v2 = this.adjacencyList[vertex1].indexOf(vertex2);
          this.adjacencyList[vertex1].splice(v2,1);
        } else {
          return -1;
        }
      }
      if (this.adjacencyList[vertex2]){
        if (this.adjacencyList[vertex2].indexOf(vertex1)){
          var v1 = this.adjacencyList[vertex2].indexOf(vertex1);
          this.adjacencyList[vertex2].splice(v1,1);
        }
      }
    }
    breadthFirstSearch(start,end){
      var queue = [start];
      var result = [];
      var visited = {};
      var currentVertex;
      
      find = false;
      
      visited[start] = true;
      
      while (queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
        
        for (var i = 0; i < this.adjacencyList[currentVertex].length ; i++){
          var value = this.adjacencyList[currentVertex][i];
          if (value === end){
            find = true;
          }
            if (!visited[value]){
              visited[value] = true;
              queue.push(this.adjacencyList[currentVertex][i])
            }
        }
      }
      return find;
    }
    
  }
  
  
  var graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addEdge(1,2)
  graph.addEdge(1,3)
  graph.addEdge(2,3)
  
  console.log(graph.breadthFirstSearch(1,2));
  console.log(graph)