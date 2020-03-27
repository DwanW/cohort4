import React from 'react';

const FIFO = ({ queue, isStack, queueBack, onClick, isAdding }) => (
    <div className={`${isStack ? '' : 'activated'} queue-component`} onClick={onClick}>
        <h3>FIFO</h3>
        <div className='queue-container'>
            {
                queue.map((e, idx) => (
                    <div key={idx}
                        className={`${idx === queueBack ? 'added-item' + (isAdding ? ' drop-in' : '') : ''} stack-item`}
                        style={{ bottom: `${idx * 40}px` }}
                    >
                        <span className='label'>{e.title}</span>
                    </div>
                ))
            }
        </div>
    </div>
)

export default FIFO;