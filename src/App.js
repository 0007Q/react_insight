import React from 'react';
import './App.css';

import SingleCard from './Components/Cards/SingleCard'
import MyChart from './Components/Charts/BarChart'

import AcUnitIcon from '@material-ui/icons/AcUnit';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Learn React</h2>
        <p>Dominic Colson</p>
        <SingleCard value="1234" 
                    icon={<AcUnitIcon />}
                    trend={<TrendingUpIcon />}
                    chart={<MyChart />} />
      </header>
    </div>
  );
}

export default App;
