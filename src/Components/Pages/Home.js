import React from 'react';
//import './App.css';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './Components/Styles/AdminCardSingle.css'

import CardPackTop from '../Cards/CardPackTop'

//import { Button } from 'react-bootstrap';

//import MyChart from './Components/Charts/BarChart'
//import About from './Components/Pages/About'
//import AcUnitIcon from '@material-ui/icons/AcUnit';
//import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
//import SyncProblemSharpIcon from '@material-ui/icons/SyncProblemSharp';
//import ColumnChart from "./Components/Cards/HighLineCardBar";

import SingleCard from '../Cards/SingleCard'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import CardSparkLine from '../Charts/CardSparkLine'
import HeaderLine from '../HighLineHeader/HighLineHeader'

import CardSparkBar from '../Charts/SparkLineBar'

function Home() {
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
                    chart={<CardSparkBar />} />
        </div>
      </header>
        <CardPackTop />
      </div> 
  );
}

export default Home;
