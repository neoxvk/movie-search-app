import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";


const useFetchAllMovies = () => {
  const [famousMovies, setFamousMovies] = useState([]);
  const [famousTVSeries, setFamousTvSeries] = useState([]);
  const [recommendations, setRecommendations] = useState([]);


  const dispatch = useDispatch()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    const famousMoviesList = ["The Godfather", "Titanic", "Inception"];
    const famousTVSeriesList = ["Breaking Bad", "Friends", "Game of Thrones"];

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

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


        //dispatch the setFamousMovies
        
       
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { famousMovies, famousTVSeries};


};

export default useFetchAllMovies
