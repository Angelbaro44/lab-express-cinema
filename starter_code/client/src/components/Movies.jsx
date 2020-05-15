import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class Movies extends Component {
state=({
      movies:[]
})

async componentDidMount(){
      let res = await axios.get(`http://localhost:5000/movies`)
      
      this.setState({
        movies:res.data
      })
    }

    displayMovie = () =>{
        
         return this.state.movies.sort((a,b)=>{return a.title.localeCompare(b.title)}).map(movies=>{
            console.log(this.state)

            return(
          <section key={movies._id}>
                <h3>{movies.title}</h3>
                <img width='200px' src={movies.image} alt={movies.title}/>
            <Link to={`/movies/${movies._id}`}>More info on {movies.title}</Link>
      

          </section> 

          )
          })
    };





      render() {
            console.log(this.state)
            return (
                  <div>
                      <h1>Movie Catalog</h1>  
                        {this.displayMovie()}
                  </div>
            );
      }
}

export default Movies;