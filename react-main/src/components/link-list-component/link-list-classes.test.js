import { ListNode, LinkedList } from './link-list-classes';

test('is my listnode class working', () => {
    let myListNode = new ListNode('cucumber', 3);
    expect(myListNode.subject).toBe('cucumber');
    expect(myListNode.amount).toBe(3);
    expect(myListNode.show()).toBe('subject: cucumber, amount: 3');
});

test('is my linklist class working', () => {
    let myList = new LinkedList();
    expect(myList.printList()).toEqual([]);
    expect(myList.insert('apple', 5)).toEqual({ "subject": "apple", "amount": 5, "forwardNode": null });
    expect(myList.insert('banana', 99)).toEqual({ "subject": "banana", "amount": 99, "forwardNode": null });
    expect(myList.head.forwardNode).toEqual({ "subject": "banana", "amount": 99, "forwardNode": null });
    expect(myList.position).toBe(1);
    expect(myList.length).toBe(2);
    myList.insert('orange', 10);
    expect(myList.printList()).toEqual([5,99,10]);
    expect(myList.printSubject()).toEqual([ "apple", "banana", "orange"]);
    expect(myList.position).toBe(2);
    expect(myList.next()).toBe(null);
    expect(myList.previous()).toEqual({"subject": "banana", "amount": 99, "forwardNode": {"subject": "orange","amount": 10, "forwardNode": null}});
    expect(myList.position).toBe(1);
    expect(myList.first()).toEqual(myList.head);
    expect(myList.previous()).toBe(null);
    expect(myList.last()).toEqual({"subject": "orange","amount": 10, "forwardNode": null});
    myList.head = myList.divdeThenMerge(myList.head);
    expect(myList.head).toEqual({"subject": "apple", "amount": 5, "forwardNode": {"subject": "orange","amount": 10, "forwardNode": {"subject": "banana", "amount": 99, "forwardNode": null}}});
    expect(myList.length).toBe(3);
    expect(myList.position).toBe(2);
});