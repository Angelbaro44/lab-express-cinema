import React, { Component } from "react";
import Home from "./components/Home";
import Movies from './components/Movies';
import {Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={(props) => <Home {...props} />} />
      <Route exact path='/movies' component={(props) => <Movies {...props} />} />

    </Switch>
    );
  }
}

export default App;
