import React, { Suspense, useCallback, useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import useFetch from '../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';

import MovieListLoader from '../components/LazyMovieList';
import Spinner from '../utils/spinner';

import useFetchAllMovies from '../hooks/useFetchAllMovies';
import { setFamousMovies, setFamousTvSeries, setSearchResult } from "../redux/movieSlice";






const Dashboard = () => {
    const [query, setQuery] = useState('');
   
    const{data =[], loading, error} = useFetch(query)
    const { famousMovies=[], famousTVSeries=[] } = useFetchAllMovies();
    const dispatch = useDispatch()


  const movies = useSelector((state) => state.movies.searchResult) || [];

  console.log("fam", famousMovies)



    //Update reduc, when fresh data is found
    useEffect(()=> {
        if(data && data.length > 0){
            dispatch(setSearchResult(data));
        }
        
    },[data, dispatch])

    useEffect(() => {
      if (famousMovies.length > 0 && famousTVSeries.length > 0) {
        dispatch(setFamousMovies(famousMovies));
        dispatch(setFamousTvSeries(famousTVSeries));
        
      }
    }, [famousMovies, famousTVSeries, dispatch]);

    //handle search
    const handleSearch = useCallback((searchQuery)=>{
        setQuery(searchQuery)
    },[])

    

    
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto p-2">
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <MovieListLoader movies={movies} />
        <section className="py-3">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Famous Movies
          </h2>
          <MovieListLoader movies={famousMovies} />
        </section>

        <section className="py-3">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Famous TV Series
          </h2>
          <MovieListLoader movies={famousTVSeries} />
        </section>

        {loading && (
          <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <Spinner />
          </div>
        )}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Dashboard