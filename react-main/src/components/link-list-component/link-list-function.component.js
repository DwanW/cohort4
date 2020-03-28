import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { LinkedList } from './link-list-classes';
import './link-list.styles.css';
import { ThemeContext } from '../../ThemeContext';

const exampleList = { "subject": "apple", "amount": 12, "forwardNode": { "subject": "orange", "amount": 100, "forwardNode": { "subject": "banana", "amount": 75, "forwardNode": null } } };

const ListApp = () => {
    const [list, setList] = useState(new LinkedList(exampleList));

    useEffect(() => {
        calculateLength(list);
    }, [list]);

    const [position, setPosition] = useState(0);
    const [subject, setSubject] = useState('');
    const [amount, setAmount] = useState();

    const theme = useContext(ThemeContext)



    const calculateLength = (list) => {
        let count = 0;
        let currentNode = list.head;
        while (currentNode !== null) {
            count++
            currentNode = currentNode.forwardNode;
        }
        let tempList = list;
        tempList.length = count;
        setList(tempList);
    }
    const handleSubjectChange = event => {
        setSubject(event.target.value);
    }

    const handleAmountChange = event => {
        setAmount(event.target.value);
    }

    const changeList = (action) => {
        switch (action) {
            case 'first':
                list.first();
                setList(list);
                setPosition(list.position);
                break;
            case 'last':
                list.last();
                setList(list);
                setPosition(list.position);
                break;
            case 'previous':
                list.previous();
                setList(list);
                setPosition(list.position);
                break;
            case 'next':
                list.next();
                setList(list);
                setPosition(list.position);
                break;
            case 'delete':
                {
                    let tempList = new LinkedList(list.head);
                    tempList.length = list.length;
                    tempList.position = list.position;
                    tempList.delete();
                    setList(tempList);
                    setPosition(tempList.position);
                }
                break;
            case 'insert':
                if (subject && amount){
                list.insert(subject,amount);
                setList(list);
                setPosition(list.position);
                }
                break;
            case 'sort':
                let sortedNode = list.divdeThenMerge(list.head);
                let sortedList = new LinkedList(sortedNode);
                sortedList.position = position;
                setList(sortedList);
                break;
            default:
                return;
        }
    }

    const drawList = (list) => {
        let currentNode = list.head;
        let nodeArr = [];
        while (currentNode !== null) {
            let tempNode = currentNode;
            nodeArr.push(tempNode);
            currentNode = currentNode.forwardNode;
        }
        return nodeArr;
    }

    return (
        <div id="list-app">
            <h3 className='list-header' style={{color:theme.text}}>Linked List Data Structure</h3>
            <div className='list-node-container'>
                {
                    drawList(list).map((node, idx) => (
                        <div key={idx} className={`list-node ${position === idx ? 'current-position' : ''}`}>{node.subject}<br /> {node.amount}</div>
                    ))
                }
            </div>
            <div className='list-control-primary'>
                <input className="list-input" type='text' placeholder="subject" value={subject} onChange={handleSubjectChange}/>
                <input className="list-input" type='number' placeholder="amount" onChange={handleAmountChange}/>
                <button className='control' onClick={() => changeList('insert')}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            <div className='list-control-secondary'>
                <button className='control' onClick={() => changeList('first')} id="first"><i className="fa fa-angle-double-left" aria-hidden="true"></i></button>
                <button className='control' onClick={() => changeList('previous')} id="previous"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <button className='control' onClick={() => changeList('next')} id="next"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                <button className='control' onClick={() => changeList('last')} id="last"><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                <button className='control' onClick={() => changeList('delete')} id="delete"><i className="fa fa-times" aria-hidden="true"></i></button>
                <button className='control' onClick={() => changeList('sort')} id="sort"><i className="fa fa-sort-numeric-asc" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default ListApp