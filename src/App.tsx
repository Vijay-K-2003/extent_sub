import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <Sidenav />
        <div className="MainContent">
          Main Content
        </div>
      </div>
    </div>
  )
}

export default App
