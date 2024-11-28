import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResult } from '../redux/movieSlice';
import MovieList from '../components/MovieList';

const Dashboard = () => {
    const [query, setQuery] = useState('');
    const{data =[], loading, error} = useFetch(query)
    const dispatch = useDispatch()


    //Update reduc, when fresh data is found
    useEffect(()=> {
        if(data && data.length > 0){
            dispatch(setSearchResult(data));
        }
        
    },[data, dispatch])

    //handle search
    const handleSearch = useCallback((searchQuery)=>{
        setQuery(searchQuery)
    },[])
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto p-2">
        <SearchBar onSearch={handleSearch} />
        <MovieList />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Dashboard