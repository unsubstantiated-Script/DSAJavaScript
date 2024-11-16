class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                //Handling duplicates
                if (val === current.value) return undefined;
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(val) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;
        return current;
    }

    breadthFirstSearch() {
        let data = [],
            queue = [],
            node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

}

export {BinarySearchTree}