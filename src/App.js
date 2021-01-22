import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Logged from './components/logged';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/logged" exact component={Logged} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
