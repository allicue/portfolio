import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutMe from './screens/AboutMe/AboutMe';
import Home from './screens/Home/Home';
import Portfolio from './screens/Portfolio/Portfolio';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path="/about-me" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
