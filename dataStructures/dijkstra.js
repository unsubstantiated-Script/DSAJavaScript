import {PriorityQueue} from "./priorityQueue.js";

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // this gets returned at the end.
        let smallest;

        //build initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        // as long as there is something to visit.
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // We are done
                // We need to build a path to return at the end. This builds the array in reverse.
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    // This finds the neighboring node.
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    // Calculate distance to neighboring node. Just adds the next link in the chain.
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]) {
                        //updates the new smallest distance to a neighbor
                        distances[nextNeighbor] = candidate;
                        //updates previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        //Reversing the list and adding back in the first node
        return path.concat(smallest).reverse();
    }
}


// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//
//     enqueue(val, priority) {
//         this.values.push({val, priority});
//         this.sort();
//     }
//
//     dequeue() {
//         return this.values.shift();
//     }
//
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority)
//     }
//
// }


export {WeightedGraph}