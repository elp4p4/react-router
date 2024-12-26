import React, { useState } from "react";
import MovieList from "./components/List";
import Filter from "./components/Filter";
import AddMovie from "./components/Add";
import moviesData from "./movies";
import Barre from "./components/Barre";
import "./App.css";

const App = () => {
  // State to manage the list of movies
  const [movies, setMovies] = useState(moviesData);

  // State to manage the next available id
  const [nextId, setNextId] = useState(moviesData.length + 1);

  // State to manage the filter
  const [filter, setFilter] = useState({ title: "", rating: "" });

  // Function to Add a new movie to the list
  const handleAddMovie = (movie) => {
    const newMovie = { ...movie, id: nextId };
    setMovies([...movies, newMovie]);
    setNextId(nextId + 1); 
  };

  // Filtering movies based on the title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div>
      <Barre />
      <div className="app-container">
        <div className="app-content">
          <Filter filter={filter} setFilter={setFilter} />
          <MovieList movies={filteredMovies} />
          <AddMovie handleAddMovie={handleAddMovie} />
        </div>
      </div>
    </div>
  );
};

export default App;