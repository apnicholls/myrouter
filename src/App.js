import React from 'react';
import './App.css';
import Tasklist from './Tasklist';
import Account from './Account';
import Help from './Help';
import Nav2 from './Nav2';
import Contact from './contact';
import Reservation from './form';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { queryHelpers } from '@testing-library/react';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav2 />
        <Switch>
        <Route path="/tasklist" exact component={Tasklist} />
        {/* <Route path="/account" exact component={Account} /> */}
        <Route path="/help" exact component={Help} />
        <Route path="/form" exact component={Reservation} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
