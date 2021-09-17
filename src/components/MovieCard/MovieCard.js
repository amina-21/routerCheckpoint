import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div >
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img height="350" variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.rate}
          </Card.Text>
          <Link to={`/movie/${movie.id}`}><Button variant="primary">View Description</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
