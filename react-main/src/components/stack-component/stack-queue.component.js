import React, { useContext } from 'react';
import { useState, useEffect } from 'react';

import LIFO from './lifo-stack';
import FIFO from './fifo-queue';

import './stack.styles.css';
import { ThemeContext } from '../../ThemeContext';

const StackApp = () => {
    const [stackArr, setStackArr] = useState([]);
    const [queueArr, setQueueArr] = useState([]);
    const [stackTop, setStackTop] = useState(-1);
    const [queueBack, setQueueBack] = useState(-1);
    const [isStack, setIsStack] = useState(true);

    //animation hooks
    const [isAdding, setIsAdding] = useState(true);


    //on render data
    const [apiData, setApiData] = useState(['doctor-zombie', 'lawyer-zombie', 'developer-zombie']);

    //context hook
    const theme = useContext(ThemeContext);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://parseapi.back4app.com/classes/Job',
                {
                    headers: {
                        'X-Parse-Application-Id': 'rQHFSooHzoFzPXrYcW42Tr6MwvbM7U2Alx1Lfu78', // This is the fake app's application id
                        'X-Parse-Master-Key': 'Irv8n3StNYfdQp2RbIiYs5sN76b6hA7GQ79cRwdG', // This is the fake app's readonly master key
                    }
                });
            const data = await response.json();
            setApiData(data.results);
        } catch (error) {
            throw (error);
        }
    }

    const handlePutIn = () => {
        if (isStack) {
            let randomIdx = Math.round(Math.random() * 100);
            let tempArr = [...stackArr, apiData[randomIdx]];
            setStackTop(stackTop + 1);
            setStackArr(tempArr);
            setIsAdding(true);
        } else {
            let randomIdx = Math.round(Math.random() * 100);
            let tempArr = [...queueArr, apiData[randomIdx]];
            setQueueBack(queueBack + 1);
            setQueueArr(tempArr);
            setIsAdding(true);
        }
    }

    const handleTakeOut = () => {
        if (isStack) {
            if (stackTop === -1) return;
            else {
                let tempArr = [...stackArr];
                tempArr.pop();
                setStackTop(stackTop - 1);
                setStackArr(tempArr);
                setIsAdding(false);
            }
        } else {
            if (queueBack === -1) return;
            else {
                let tempArr = [...queueArr];
                tempArr.shift();
                setQueueBack(queueBack - 1);
                setQueueArr(tempArr);
                setIsAdding(false);
            }
        }
    }

    return (
        <div id="stack-app">
            <h3 style={{ color: theme.text }}>Stack and Queue Demo</h3>
            <div className="stack-control-container">
                <button className="stack-control" onClick={handlePutIn}>Put In</button>
                <button className="stack-control" onClick={handleTakeOut}>Take Out</button>
            </div>
            <div className='demo-container'>
                <LIFO
                    stack={stackArr}
                    isStack={isStack}
                    stackTop={stackTop}
                    onClick={() => setIsStack(true)}
                    isAdding={isAdding}
                />
                <FIFO
                    queue={queueArr}
                    isStack={isStack}
                    queueBack={queueBack}
                    onClick={() => setIsStack(false)}
                    isAdding={isAdding}
                />
            </div>
        </div>
    );
};

export default StackApp;
