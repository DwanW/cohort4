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
    constructor(list) {
        this.head = list || null;
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

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.amount);
            currentNode = currentNode.forwardNode;
        }
        return array;
    }

    printSubject(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.subject);
            currentNode = currentNode.forwardNode;
        }
        return array;
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
            return null;
        }
    }

    previous() {
        //backup one node;
        if (this.position !== 0) {
            this.position = this.position - 1;
            let currentNode = this.nodeAtPosition();
            return currentNode;
        } else {
            return null;
        }
    }



    insert(subject, amount) {
        //insert new node after current node
        if (this.length === 0) {
            const newNode = new ListNode(subject, amount);
            this.head = newNode;
            this.length = this.length + 1;
            return newNode;
        } else {
            let currentNode = this.nodeAtPosition();
            let nextNode = currentNode.forwardNode;
            const newNode = new ListNode(subject, amount);
            currentNode.forwardNode = newNode;
            newNode.forwardNode = nextNode;
            this.position = this.position + 1;
            this.length = this.length + 1;
            return newNode;
        }
    }

    delete() {
        //delete current node
        if (this.length === 0) {
            return
        } else if (this.length === 1) {
            this.head = null
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
        while (counter !== this.length) {
            total = total + currentNode.amount;
            currentNode = currentNode.forwardNode;
            counter++;
        }
        return total;
    }

    //implementation of divide and conquer;
    //pure function using linked list with forwardNode property name;
    divdeThenMerge(list) {
        if (list.forwardNode === null) {
            return list;
        }
        
        let count = 0;
        let countList = list;
        let leftPart = list;
        let leftPointer = list;
        let rightPart = null;
        //count the nodes within the list
        while (countList.forwardNode !== null){
            count ++;
            countList = countList.forwardNode;
        }
        

        //divide to two parts
        let mid = Math.floor(count / 2);
        let count2 = 0;

        while (count2 < mid ){
            count2++;
            leftPointer = leftPointer.forwardNode;
        }
        rightPart = new LinkedList(leftPointer.forwardNode);
        //this step breaks the list with left part remain;
        leftPointer.forwardNode = null;
        

        return this.merge(this.divdeThenMerge(leftPart), this.divdeThenMerge(rightPart.head))
    }

    merge(leftlist, rightlist){
        // Create new list
        let result = new LinkedList();

        //pointer is essentially a variable to keep track of position in the list;
        let resultPointer = result.head;
        let pointerLeft = leftlist;
        let pointerRight = rightlist;
        
        //logic: if true then

        while (pointerLeft && pointerRight){
            let tempAmount = null;
            let tempSubject = null;

            
            if (pointerLeft.amount > pointerRight.amount) {
                tempAmount = pointerRight.amount;
                tempSubject = pointerRight.subject;
                pointerRight = pointerRight.forwardNode;
            } else {
                tempAmount = pointerLeft.amount;
                tempSubject = pointerLeft.subject;
                pointerLeft = pointerLeft.forwardNode;
            }

            if (result.head === null){
                result.head = new ListNode(tempSubject,tempAmount);
                resultPointer = result.head;
            } else {
                resultPointer.forwardNode = new ListNode(tempSubject,tempAmount);
                resultPointer = resultPointer.forwardNode;
            }
        }
        resultPointer.forwardNode = pointerLeft;
        while (resultPointer.forwardNode){
            resultPointer = resultPointer.forwardNode;
        }
        resultPointer.forwardNode = pointerRight;

        return result.head;
    }

    // comeback to do this when I got more time;
    // sortBySubject() {
    //     //sort subject
    // }
}

export { ListNode, LinkedList };