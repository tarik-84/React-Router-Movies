import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div >
      {movies.map(movie => (
       <Link to={`movie/${movie.id}`} className="movie-list">
        <MovieCard key={movie.id} movie={movie} /></Link> 
      ))}
    </div>
  );
}

export default MovieList;
