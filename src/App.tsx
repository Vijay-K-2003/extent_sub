import React, { useState } from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Metamask from './components/Metamask/Metamask';
import Profile from './components/Profile/Profile';
import ContentPage from './components/ContentPage/ContentPage';

function App() {
  const [activeTab, setActiveTab] = useState("Content");
  console.log(activeTab);
  return (
    <div className="app">
      <div className="background">
        <Sidenav active={activeTab} setActive={setActiveTab} />
        <div className="main-content">
          <div className="main-content__wrapper">
            <div className="main-content__wrapper--header">
              <Metamask hash={"0x0445.....3E0716"}/>
              <Profile fullname={"Nobuhara"} username={"noburockshere"} />
            </div>
          </div>
          {
            activeTab == "Content" ? <ContentPage /> : "Page Not Yet Created !"
          }
        </div>
      </div>
    </div>
  )
}

export default App
