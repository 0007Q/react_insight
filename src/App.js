import React from 'react';
import './App.css';

import Dominic from './Components/Cards/SingleCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Learn React</h2>
        <p>Dominic Colson</p>
        <Dominic />
      </header>
    </div>
  );
}

export default App;
