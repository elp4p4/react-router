import React, { useState } from "react";
import "../App.css";

const AddMovie = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = () => {
    if (!newMovie.title || !newMovie.description) {
      alert("Title and Description are required!");
      return;
    }
    handleAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div className="add-movie-container">
      <input
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        className="add-movie-input"
      />
      <input
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        className="add-movie-input"
      />
      <input
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        className="add-movie-input"
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleChange}
        className="add-movie-input"
      />
      <button onClick={handleSubmit} className="add-movie-button">
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;