import React, { useState } from 'react';

import logo from './assets/logo.svg';
import home from './assets/main.svg';
import tttSvg from './assets/ttt.svg';
import accSvg from './assets/acc.svg';
import citySvg from './assets/city.svg';
import linklistSvg from './assets/linklist.svg';
import stackSvg from './assets/stack.svg';

import Ttt from '../src/components/ttt-component/ttt';
import Accounts from './components/account-component/account-controller';
import './App.css';
import Community from './components/city-component/community';
import LinkApp from './components/link-list-component/link-list-function.component';
import StackApp from './components/stack-component/stack-queue.component';

import { themes, ThemeContext } from './ThemeContext';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>
)

function App() {
  const [displayElement, setDisplayElement] = useState(0);
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(isDark => !isDark);
  }

  return (
    <ThemeContext.Provider value={isDark ? themes.dark : themes.warm}>
      <div className="App" >
        {(displayElement === 0) ? <Header /> :
          (displayElement === 1) ? <Ttt /> :
            (displayElement === 2) ? <Accounts /> :
              (displayElement === 3) ? <Community /> :
                (displayElement === 4) ? <LinkApp /> :
                  (displayElement === 5) ? <StackApp /> : ''}
        <div className="bottom-nav">
          <img src={home} onClick={() => setDisplayElement(0)} className={`nav-logo ${displayElement === 0 ? 'active' : ''}`} alt="logo" />
          <img src={tttSvg} onClick={() => setDisplayElement(1)} className={`nav-logo ${displayElement === 1 ? 'active' : ''}`} alt="logo" />
          <img src={accSvg} onClick={() => setDisplayElement(2)} className={`nav-logo ${displayElement === 2 ? 'active' : ''}`} alt="logo" />
          <img src={citySvg} onClick={() => setDisplayElement(3)} className={`nav-logo ${displayElement === 3 ? 'active' : ''}`} alt="logo" />
          <img src={linklistSvg} onClick={() => setDisplayElement(4)} className={`nav-logo ${displayElement === 4 ? 'active' : ''}`} alt="logo" />
          <img src={stackSvg} onClick={() => setDisplayElement(5)} className={`nav-logo ${displayElement === 5 ? 'active' : ''}`} alt="logo" />
        </div>
        <button className="theme-control" style={{ backgroundColor: isDark ? themes.warm.text : themes.dark.text }} onClick={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
