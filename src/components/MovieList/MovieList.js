import React, { useState } from "react";
import { moviedata } from "../../data";
import AddMovie from "../Add/AddMovie";
//import Filter from "../Filter/Filter";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState(moviedata);
  
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      {/* <div>
        <Filter />
      </div> */}
      <div>
        <AddMovie handleAdd={handleAdd} />
      </div>
      <div className="d-flex flex-wrap justify-content-around">
          
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />))
        }
        
      </div>
      
    </div>
  );
};

export default MovieList;
