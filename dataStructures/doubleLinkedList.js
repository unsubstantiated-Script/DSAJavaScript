class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        //Sets up the first node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else { // Sets up the next node
            //Arrow forward
            this.tail.next = newNode;
            //Arrow backward
            newNode.prev = this.tail;

            //Loading the tail box w/ value
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            // Disconnecting the prev arrow
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;

    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.head === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;

        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++
            }
            return current;
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(index, val) {
        let result = this.get(index);

        if (result) {
            result.val = val;
            return true
        }
        return false;

    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) this.unshift(val);
        if (index === this.length) this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index)
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}