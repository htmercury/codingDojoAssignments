class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        let insertionPoint = this.findInsertionPoint(this.root, val);
        console.log('test', insertionPoint);
        if (val > insertionPoint.value) {
            insertionPoint.right = newNode;
        }
        else {
            insertionPoint.left = newNode;
        }

    }
    findInsertionPoint(node, val) {
        console.log(node.value, val)
        if (val > node.value && node.right) {
            return this.findInsertionPoint(node.right, val);
        }
        else if (val < node.value && node.left) {
            return this.findInsertionPoint(node.left, val);
        }
        return node;
    }

    preOrderTraverse() {
        let result = [];
        preOrder(this.root);
        function preOrder(node) {
            if (node == null) {
                return;
            }
            result.push(node.value);
            preOrder(node.left);
            preOrder(node.right);
        }
        return result;
    }

    inOrderTraverse() {
        let result = [];
        inOrder(this.root);
        function inOrder(node) {
            if (node == null) {
                return;
            }
            inOrder(node.left);
            result.push(node.value);
            inOrder(node.right);
        }
        return result;
    }

    postOrderTraverse() {
        let result = [];
        postOrder(this.root);
        function postOrder(node) {
            if (node == null) {
                return;
            }
            postOrder(node.left);
            postOrder(node.right);
            result.push(node.value);
        }
        return result;
    }

    depth() {
        function searchDepth(node) {
            if (node == null) {
                return 0;
            }
            let level = 1;
            let queue = [];
            node.level = level;
            queue.push(node);
            while (queue.length != 0) {
                let currNode = queue.shift();
                level = currNode.level;
                if (currNode.left) {
                    currNode.left.level = level + 1;
                    queue.push(currNode.left);
                }
                if (currNode.right) {
                    currNode.right.level = level + 1;
                    queue.push(currNode.right);
                }
            }
            return level;
        }
        return searchDepth(this.root);
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

let sample = new BST();
sample.insert(40);
sample.insert(20);
sample.insert(50);
sample.insert(25);
console.log(sample);

sample.inOrderTraverse(sample.root);
