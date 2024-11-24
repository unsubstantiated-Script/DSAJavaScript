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

    // Adds an item to the front of the list
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

    // Removes an item off the end of the list
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

    // Removes a value from the start of the list
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

    // Adds a value to the start of the list
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

    // Gets a value at a position
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            //Incrementing the position in the array
            current = current.next
            counter++;
        }
        return current;
    }

    //Sets a new value
    set(val, index) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    //Inserts a new node
    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        //Inserts at end
        if (index === this.length) return !!this.push(val);
        //inserts at start
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);

        //Gets the item before the index so we can insert the new val at the index.
        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;


        this.length++;
        return true;


    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;

        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        //Swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    traverse() {
        //Will loop this till it runs out and returns null;
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}




