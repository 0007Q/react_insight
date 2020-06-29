import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import ChartPage from './Components/Pages/Charts'

function App() {
  return (
   <main>
    <BrowserRouter>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} />
       <Route path="/charts" component={ChartPage} />
     </Switch>
     </BrowserRouter>
    </main>
  );
}

export default App;
