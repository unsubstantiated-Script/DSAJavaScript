//Node stores a piece of data - val
// reference to the next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        //Sets up the first node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;

        } else { // Sets up the next node
            //Current tail
            this.tail.next = newNode;
            //moving the tail marker over
            this.tail = newNode;
        }

        this.length++;

        return this;
    }
}




