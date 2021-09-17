import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieDescription = ({match, movies, history}) => {
    const findMovie = movies.find((movie)=> movie.id == match.params.id)
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <Card style={{ width: "18rem"}} className="mb-3 text-center">
        <Card.Img height="350" variant="top" src={findMovie.posterUrl} />
        <Card.Body>
          <Card.Title>{findMovie.title}</Card.Title>
          <Card.Text>
              {findMovie.description} 
              <br/>
              <a href={findMovie.trailer}>Watch Trailer</a>
          </Card.Text>
          
            <Button variant="primary" onClick={()=> history.goBack()}>Go Back</Button>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDescription;
