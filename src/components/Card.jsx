import React from "react";
import "../App.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{animationDelay: "800ms"}}>
      <img src={movie.posterURL} alt={`${movie.title} poster`} className="movie-poster" />
      <h3 className="movie-title">{movie.title}</h3>
      <br />
      <p className="movie-rating">⭐Rating: {movie.rating}</p>
      <br />
    <Button as={Link} to={`/movie/${movie.id}`} variant="warning">See More</Button>
    </div>
  );
};

export default MovieCard;