import React, { Component } from 'react';
import Axios from 'axios';
import e from 'express';

class NewMovie extends Component {

// fillState=(event)=>{
//       console.log(this.state)
//       this.setState({
//             [event.target.name]:event.target.value,
//       })
// }
// sentPost=(event)=>{
//       e.preventDefault()
//       console.log('sent!')
//       Axios.post('http://localhost:5000/new-post',this.state);

// }

//       render() {
//             return (
//                   <div>
//                         <form onSubmit={event=>this.sendPost(event)}>
//                               <input name='title' type='text' onChange={event=>this.fillState(event)}/>
//                               <input name='title' type='text' onChange={event=>this.fillState(event)}/>
//                               <input name='submit' type='submit' onChange={event=>this.fillState(event)}/>

//                         </form>
                        
//                   </div>
//             );
//       }
}

export default NewMovie;