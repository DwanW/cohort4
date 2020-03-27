import React from 'react';

const LIFO = ({ stack, isStack, stackTop, onClick }) => (
    <div className={`${isStack ? 'activated' : ''} stack-component`} onClick={onClick}>
        <h3>LIFO</h3>
        <div className='stack-container'>
            {
                stack.map((e, idx) => (
                    <div key={idx} className={`${idx === stackTop ? 'added-item' : ''} stack-item`}>{e.title}</div>
                ))
            }
        </div>
    </div>
)

export default LIFO;