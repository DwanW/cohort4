import React from 'react';
import {useState,useEffect} from 'react';

const LIFO = ({ stack, isStack, stackTop, onClick, isAdding }) => {
    const [shouldUnmountRender, setUnmountRender] = useState(false);

    useEffect(() => {
        if (true) setUnmountRender(true);
      }, []);

    return (
        <div className={`${isStack ? 'activated' : ''} stack-component`} onClick={onClick}>
            <h3>LIFO</h3>
            <div className='stack-container'>
                {
                    stack.map((e, idx) => (
                        <div
                            key={idx}
                            className={`${idx === stackTop ? 'added-item' + (isAdding && isStack ? ' drop-in' : '') : ''} stack-item`}
                            style={{ bottom: `${idx * 40}px` }}
                        >
                            <span className='label'>{e.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LIFO;