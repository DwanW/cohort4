import React from 'react';
import logo from './logo.svg';
import drawing from './drawing1.svg'
import './App.css';
import {useState} from 'react';

function App() {
  const [number,setNumber] = useState('none');

  const handleClick = (e) => {
    setNumber(e.target.getAttribute("index"))
    // console.log(e.target.getAttribute("index"));
  }

  return (
    <div className="App">
      <img index='1' src={drawing} className="drawing"  onClick={handleClick} alt="logo" />
      <img index='2'src={drawing} className="drawing"   onClick={handleClick}alt="logo" />
      <img index='3'src={drawing} className="drawing" onClick={handleClick}alt="logo" />
      <img index='4'src={drawing} className="drawing" onClick={handleClick}alt="logo" />
      <img index='5'src={drawing} className="drawing" onClick={handleClick}alt="logo" />
      <img index='6'src={drawing} className="drawing" onClick={handleClick}alt="logo" />
      <div>{`drawing ${number} is been clicked`}</div>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
