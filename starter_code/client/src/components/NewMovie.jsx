import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";


class NewMovie extends Component {

fillState=(event)=>{
      console.log(this.state)
      this.setState({
            [event.target.name]:event.target.value,
      })
}
sendPost=(event)=>{
      event.preventDefault()
      console.log('sent!')
      Axios.post('http://localhost:5000/new-post',this.state).then(
            <Link to="/movies"></Link>
      );

}

      render() {
            return (
                  <div>
                        <form onSubmit={event=>this.sendPost(event)}>
                              <input name='title' type='text' required placeholder='title' onChange={event=>this.fillState(event)}/>
                              <input name='image' type='text' required placeholder='image' onChange={event=>this.fillState(event)}/>
                              <input name='director' type='text' required placeholder='director' onChange={event=>this.fillState(event)}/>
                              <input name='description' type='text' required placeholder='description' onChange={event=>this.fillState(event)}/>
                              <input name='submit' type='submit' onChange={event=>this.sendPost(event)}/>

                        </form>
                        
                  </div>
            );
      }
}

export default NewMovie;