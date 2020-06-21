import React from 'react';
import './App.css';

import SingleCard from './Components/Cards/SingleCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Learn React</h2>
        <p>Dominic Colson</p>
        <SingleCard value="1234" chart="bar chart"/>
      </header>
    </div>
  );
}

export default App;
