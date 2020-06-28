import React from 'react';
import './App.css';

import FlashCard from './Components/Cards/FlashCard'

import SingleCard from './Components/Cards/SingleCard'
//import MyChart from './Components/Charts/BarChart'
import About from './Components/Pages/About'

import AcUnitIcon from '@material-ui/icons/AcUnit';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SyncProblemSharpIcon from '@material-ui/icons/SyncProblemSharp';

import ColumnChart from "./Components/Cards/HighLineCardBar";

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
          <SingleCard value="1234 %12" 
                    icon={<SyncProblemSharpIcon style={{ fontSize: 80 }} />}
                    trend={<TrendingUpIcon />}
                    chart={<CardSparkLine />} />
        </div>
                <FlashCard />  
      </header>
      </div>
      
  );
}

export default App;
