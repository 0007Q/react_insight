import React from 'react';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import SingleCard from './Components/Cards/SingleCard'
//import MyChart from './Components/Charts/BarChart'
import About from './Components/Pages/About'

import AcUnitIcon from '@material-ui/icons/AcUnit';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import ColumnChart from "./Components/Cards/HighLineCardBar";

import SparkLine from './Components/Charts/SparkLine'

import HeaderLine from './Components/HighLineHeader/HighLineHeader'

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <HeaderLine />
        <h2>Learn React</h2>
        <p>Dominic Colson</p>
        <SingleCard value="1234 %12" 
                    icon={<AcUnitIcon />}
                    trend={<TrendingUpIcon />}
                    chart={<SparkLine />} />
      </header>
      <ColumnChart />
      <About />
      <SparkLine />
      </div>
      
  );
}

export default App;
