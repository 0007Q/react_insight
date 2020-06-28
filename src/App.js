import React from 'react';
import './App.css';

//import MyChart from './Components/Charts/BarChart'
//import About from './Components/Pages/About'
//import AcUnitIcon from '@material-ui/icons/AcUnit';
//import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
//import SyncProblemSharpIcon from '@material-ui/icons/SyncProblemSharp';
//import ColumnChart from "./Components/Cards/HighLineCardBar";

import SingleCard from './Components/Cards/SingleCard'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import CardSparkLine from './Components/Charts/CardSparkLine'
import HeaderLine from './Components/HighLineHeader/HighLineHeader'

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <HeaderLine />
        <h2>Learn React</h2>
        <p>Dominic Colson</p>
        <div>
        <SingleCard value="1234 %12" 
                    icon={<PersonSharpIcon style={{ fontSize: 80 }} />}
                    trend={<TrendingUpIcon />}
                    chart={<CardSparkLine />} />
        </div>
      </header>
      </div>
      
  );
}

export default App;
