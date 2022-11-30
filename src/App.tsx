import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Metamask from './components/Metamask/Metamask';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <div className="background">
        <Sidenav />
        <div className="main-content">
          <div className="main-content__wrapper">
            <div className="main-content__wrapper__header">
              <Metamask hash={"0x0445.....3E0716"}/>
              <Profile fullname={"Nobuhara"} username={"noburockshere"} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
