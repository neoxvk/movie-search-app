import React, {useState, useEffect} from 'react'
import axios from 'axios';

const FetchAllMovies = () => {
     const [famousMovies, setFamousMovies] = useState([]);
     const [famousTVSeries, setFamousTvSeries] = useState([]);
     const [recommendations, setRecommendations] = useState([]);
    useEffect(() => {
      const famousMoviesList = ["The Godfather", "Titanic", "Inception"];
      const famousTVSeriesList = ["Breaking Bad", "Friends", "Game of Thrones"];

      const fetchMovies = async () => {
        try {
          // setLoading(true);
          // setError(null);

          const moviePromises = famousMoviesList.map((title) =>
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=3864b029`)
          );

          const tvPromises = famousTVSeriesList.map((title) =>
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=3864b029`)
          );

          const moviesResponse = await Promise.all(moviePromises);
          const tvResponse = await Promise.all(tvPromises);

          setFamousMovies(moviesResponse.map((res) => res.data));
          setFamousTvSeries(tvResponse.map((res) => res.data));

          console.log("tv", tvResponse)
        } catch (err) {
          //setError(err.message);
        } finally {
          // setLoading(false);
        }
      };

      fetchMovies();
    }, []);

    console.log(famousMovies)
    console.log(famousTVSeries)
  return (
    <div>


    </div>
  )
}

export const { famousMovies, famousTVSeries} = FetchAllMovies;

export default FetchAllMovies