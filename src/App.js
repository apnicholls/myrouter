import React from 'react';
import './App.css';
import Tasklist from './Tasklist';
import Tasks from './Tasks';
import Nav2 from './Nav2';
import Contact from './Contact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { queryHelpers } from '@testing-library/react';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav2 />
        <Switch>
        <Route path="/tasklist" exact component={Tasklist} />
        <Route path="/tasks" exact component={Tasks} />
        <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
