import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div>
        <button onClick={this.callMyBackend}>Test Backend Call</button>
        <h1>Cinema Ironhack</h1>
        <Link className='navLinks' to='/movies'>Check the movies!</Link>
        <Link className='navLinks' to='/movies/new'>Add a movies!</Link>

      </div>
    );
  }
}
