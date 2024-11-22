class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vert) {
        if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
    }

    addEdge(vert1, vert2) {
        this.adjacencyList[vert1].push(vert2)
        this.adjacencyList[vert2].push(vert1)
    }

    removeEdge(vert1, vert2) {
        this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2)
        this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1)
    }

    removeVertex(vert) {
        while (this.adjacencyList[vert].length) {
            const adjacentVertex = this.adjacencyList[vert].pop()
            this.removeEdge(vert, adjacentVertex)
        }
        delete this.adjacencyList[vert]
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start);

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }

        return result

    }

    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        return result;
    }
}

export {Graph}