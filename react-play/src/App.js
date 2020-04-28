import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import LarryComp from './LarryComp';

let index = 20;

function App() {
  console.log('wow')
  const [count, setCount] = useState(10);
  function myOnClickCount() {
    setCount(count + 1)
    console.log('clicked', count);
  }

  function myOnClickIndex() {
    index++;
    console.log('clicked', index);
  }

  return (
    <div className="App">
      <div>
        <h1 onClick={myOnClickCount}>Hello World, count: {count}</h1>
        <h1 onClick={myOnClickIndex}>Hello World, index: {index}</h1>
        <LarryComp count={count} myOnClickCount={myOnClickCount}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
