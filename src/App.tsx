import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Metamask from './components/Metamask/Metamask';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <Sidenav />
        <div className="MainContent">
          <div className="Header">
            <Metamask hash={"0x0445.....3E0716"}/>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
