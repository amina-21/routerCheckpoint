import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home"
import MovieList from './components/MovieList/MovieList';
import { moviedata } from "./data";
import { useState } from "react";
import MovieDescription from './components/MovieDescription/MovieDescription';

const App = () => {
  const [movies, setMovies] = useState(moviedata);

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/movies" render={()=> <MovieList/>}/>
          <Route path="/movie/:id" render={(props)=> <MovieDescription {...props} movies={movies}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

