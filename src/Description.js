import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import moviesData from "./movies";
import "./App.css";
import Barre from "./components/Barre";

const MovieDescription = () => {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate(); // Navigate function to go back to home page
  
  // Find the movie data based on the ID from the URL
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
        <Barre />
        <div style={{marginTop:"10vh"}} className="description">
    <Container >
      <Row className="my-5">
        <Col md={7}>
          <h1 style={{marginBottom: "40px"}}>{movie.title}</h1>
          <p>{movie.description}</p>
        </Col>

        <Col md={5}>
          {/* Embedded video */}
          <iframe
            style={{ borderRadius: "40px" }}
            width="100%"
            height="315"
            src={movie.trailerURL}
            title={movie.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="warning" onClick={() => navigate("/")}>
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
        </div>
  );
};

export default MovieDescription;
