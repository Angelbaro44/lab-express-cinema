import React, { Component } from "react";
import Home from "./components/Home";
import Movies from './components/Movies';
import {Switch, Route } from 'react-router-dom';
import MovieDetails from "./components/MovieDetails";
import NewMovie from "./components/NewMovie";


class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={(props) => <Home {...props} />} />
      <Route exact path='/movies' component={(props) => <Movies {...props} />} />
      <Route exact path='/movies/new' component={(props) => <NewMovie {...props} />} />
      <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
    </Switch>
    );
  }
}

export default App;
