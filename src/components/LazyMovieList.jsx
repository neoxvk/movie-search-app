import React, { Suspense } from "react";
import MovieList from "./MovieList";

const LazyMovieList = React.lazy(() => import("./MovieList"));

const MovieListLoader = ({ movies }) => {
  return (
    <Suspense fallback={<div>Loading Movie List...</div>}>
      <LazyMovieList movies={movies} />
    </Suspense>
  );
};

export default MovieListLoader;
