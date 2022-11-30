import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <Sidenav />
        <div className="MainContent">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App
