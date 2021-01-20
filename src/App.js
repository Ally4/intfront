import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/login';
import Logged from './components/logged';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component="login">
              <Login />
            </Route>
            <Route path="/logged">
              <Logged />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
