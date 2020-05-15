import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
  state = {
    movie:{}
  };

  async componentDidMount() {
    const res = await Axios.get(`http://localhost:5000/moviedetails/${this.props.match.params.id}`);
    console.log(res) ;  
     this.setState({
      movie: res.data
    });
  }
  deletePost=(event)=>{
      console.log('sent!')
      Axios.delete(`http://localhost:5000/delete-post/${this.props.match.params.id}`)
      .then(response => response)
      .catch((error) => {
        throw error.response
      })
}

  render() {
console.log(this.state.movie.stars)
    return (
      <div>
        <h2>{this.state.movie.title}</h2>
        <h3>{this.state.movie.director}</h3>
        <ul>{this.state.movie.stars?.map(count=><li>{count}</li>)}</ul>
        <img src={this.state.movie.image} alt={this.state.movie.title} />
        <p>{this.state.movie.description}</p>
        <ul>{this.state.movie.showtimes?.map(count=><li>{count}</li>)}</ul>
        <br />
        <Link to="/movies"><button>Go Back</button></Link>  
        <Link to="/movies"><button onClick={event=>this.deletePost()}>Remove Movie</button></Link>      
      </div>
    );
  }
}
export default MovieDetails;