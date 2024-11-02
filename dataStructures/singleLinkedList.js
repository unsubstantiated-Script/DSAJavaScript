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

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            //This shouldn't happen if the first condition is true.
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    traverse() {
        //Will loop this till it runs out and returns null;
        let current = this.head;
        while(current) {
            console.log(current.val)
            current = current.next;
        }
    }
}




