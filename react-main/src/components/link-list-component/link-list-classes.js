class ListNode {
    constructor(subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }

    show() {
        return `subject: ${this.subject}, amount: ${this.amount}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = this.head;
        // One of the states that must be maintained will be the position
        this.position = 0;
        this.length = 0;
    }

    nodeAtPosition() {
        // find node at this position
        let counter = 0;
        let currentNode = this.head;
        while (counter !== this.position) {
            currentNode = currentNode.forwardNode;
            counter++;
        }
        return currentNode;
    }

    first() {
        //position to the first node;
        this.position = 0;
        let currentNode = this.head;
        return currentNode;
    }

    last() {
        //position to the last node;
        if (this.length > 0) {
            this.position = this.length - 1;
            let currentNode = this.nodeAtPosition();
            return currentNode;
        } else {
            this.position = 0;
            let currentNode = this.head;
            return currentNode;
        }
    }

    next() {
        //move to the next node;
        if (this.position < this.length - 1) {
            this.position = this.position + 1;
            let currentNode = this.nodeAtPosition();
            return currentNode;
        } else {
            return;
        }
    }

    previous() {
        //backup one node;
        if (this.position !== 0) {
            this.position = this.position - 1;
            let currentNode = this.nodeAtPosition();
            return currentNode;
        } else {
            return;
        }
    }



    insert(subject, amount) {
        //insert new node after current node
        if (this.length === 0){
            const newNode = new ListNode(subject, amount);
            this.head = newNode;
            this.tail = newNode;
            this.position = this.position + 1;
            this.length = this.length + 1;
            return newNode;
        } else if(this.position >= this.length) {
            const newNode = new ListNode(subject, amount);
            this.tail.forwardNode = newNode;
            this.tail = newNode;
            this.position = this.position + 1;
            this.length = this.length + 1;
            return newNode;
        } else {
            let currentNode = this.nodeAtPosition();
            let nextNode = currentNode.next;
            const newNode = new ListNode(subject, amount);
            currentNode.forwardNode = newNode;
            newNode.forwardNode = nextNode;
            this.position = this.position + 1;
            this.length = this.length + 1;
        }
    }

    delete() {
        //delete current node
        if (this.length === 0){
            return
        } else if (this.length === 1){
            this.head = null
            this.tail = this.head;
            this.position = 0;
            this.length = 0;
        } else {
            this.position = this.position - 1;
            let previousNode = this.nodeAtPosition();
            let deletingNode = previousNode.forwardNode;
            previousNode.forwardNode = deletingNode.forwardNode;
            this.length = this.length - 1;
        }
    }

    total() {
        //total of all amounts of all ListNodes
        let counter = 0;
        let currentNode = this.head;
        let total = 0;
        while(counter !== this.length){
            total = total + currentNode.amount;
            currentNode = currentNode.forwardNode;
            counter++;
        }
        return total;
    }

    sortBySubject() {
        //sort subject
    }

    sortByAmount() {
        //sort method
    }
}

export {ListNode, LinkedList};