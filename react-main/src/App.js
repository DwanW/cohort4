import React, { useState } from 'react';
import logo from './logo.svg';
import home from './main.svg';
import tttSvg from './ttt.svg';
import accSvg from './acc.svg';
import citySvg from './city.svg';
import Ttt from '../src/components/ttt-component/ttt';
import Accounts from './components/account-component/account-controller';
import './App.css';
import Community from './components/city-component/community';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>
)

function App() {
  const [displayElement, setDisplayElement] = useState(0);

  const show = () => (
    (displayElement === 0) ? <Header /> :
      (displayElement === 1) ? <Ttt /> :
        (displayElement === 2) ? <Accounts /> :
          (displayElement === 3) ? <Community /> : ''
  )

  return (
    <div className="App">
      {show()}
      <div className="bottom-nav">
        <img src={home} onClick={() => setDisplayElement(0)} className={`nav-logo ${displayElement === 0 ? 'active' : ''}`} alt="logo" />
        <img src={tttSvg} onClick={() => setDisplayElement(1)} className={`nav-logo ${displayElement === 1 ? 'active' : ''}`} alt="logo" />
        <img src={accSvg} onClick={() => setDisplayElement(2)} className={`nav-logo ${displayElement === 2 ? 'active' : ''}`} alt="logo" />
        <img src={citySvg} onClick={() => setDisplayElement(3)} className={`nav-logo ${displayElement === 3 ? 'active' : ''}`} alt="logo" />
      </div>
    </div>
  );
}

export default App;
