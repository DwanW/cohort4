import React from 'react';

const FIFO = ({ queue, isStack, queueBack, onClick }) => (
    <div className={`${isStack ? '' : 'activated'} queue-component`} onClick={onClick}>
        <h3>FIFO</h3>
        <div className='queue-container'>
            {
                queue.map((e, idx) => (
                    <div key={idx} className={`${idx === queueBack ? 'added-item' : ''} stack-item`}>{e.title}</div>
                ))
            }
        </div>
    </div>
)

export default FIFO;