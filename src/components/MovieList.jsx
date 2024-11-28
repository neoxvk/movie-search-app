import React from 'react'
import { useSelector } from 'react-redux'

const MovieList = () => {

    const movies = useSelector((state)=> state.movies.searchResult) || []
    console.log(movies)
  return (
    <div className="flex flex-wrap justify-center mt-0">
     
      {movies.map((movie, index) => (
        <div
          key={movie.imdbID}
          className="w-60 m-1 p-2 bg-white shadow-md rounded-lg hover:shadow-xl">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-80 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
          <p className="text-gray-600">{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList