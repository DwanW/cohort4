import React from 'react';

function LarryComp({count, myOnClickCount}) {

    return (
        <div>
            <h1>Hello World from Larry</h1>
            <h1 onClick={myOnClickCount}>Hello World, count: {count}</h1>
        </div>
    )
}

    export default LarryComp;