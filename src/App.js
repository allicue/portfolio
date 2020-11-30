import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AboutMe from './screens/AboutMe/AboutMe';
import Home from './screens/Home/Home';
import Portfolio from './screens/Portfolio/Portfolio';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';

function App() {

  const [listItems, setListItems] = useState("")
  const [fetchItems, setFetchItems] = useState(false);
  
  useEffect(() => {
    const getListItems = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/portfolio-projects`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setListItems(response.data.records);
      console.log(response.data.records)
    };
    getListItems();
  }, [fetchItems]);
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />


        <Route path="/about-me" component={AboutMe} />

        <Route path="/portfolio/:name">
          <ProjectDetails listItems={listItems}/>
        </Route>

        <Route path='/portfolio'>
          <Portfolio listItems={listItems}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
