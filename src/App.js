import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store  from './Components/store'


import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import ChartPage from './Components/Pages/Charts'
import Algolia from './Components/Pages/Algolia'
import UseState from './Components/Pages/UseState'
import dropDownPage from './Components/Pages/dropDownPage'

function App() {
  return (
    <Provider  store={store}>
   <main>
    <BrowserRouter>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} />
       <Route path="/charts" component={ChartPage} />
       <Route path="/algolia" component={Algolia} />
       <Route path="/usestate" component={UseState} />
       <Route path="/dropdown" component={dropDownPage} />
     </Switch>
     </BrowserRouter>
    </main>
    </Provider>
  );
}

export default App;
