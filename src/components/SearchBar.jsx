import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
 import { useDispatch } from 'react-redux';
// import { setSearchQuery } from '../redux/movieSlice';
// import useFetch from '../hooks/useFetch';

import { clearSearchResult } from '../redux/movieSlice';

const SearchBar = ({onSearch}) => {
    const [input, setInput] = useState('')
    const debouncedInput = useDebounce(input, 300)

    const dispatch = useDispatch();

    useEffect(()=> {
        if(debouncedInput){
             onSearch(debouncedInput);
        }
       
    },[debouncedInput, onSearch])


    const handleChange = (e) => {
        //dispatch(setSearchQuery(e.target.value));
        setInput(e.target.value);
        //onSearch(e.target.value)  we willl use debounced input

    }

    const handleClear = () => {
        dispatch(clearSearchResult());
        setInput('')

    }

  
   


  return (
    <div className="p-2 flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-3xl">
        <label className="block mb-4">
          <h3 className="text-center text-blue-600 font-bold text-lg">
            Search for a movie here...
          </h3>
        </label>
        <div className="flex items-center space-x-2">
          {/* Input Field */}
          <input
            type="text"
            value={input}
            className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none px-6 py-3 text-gray-700 text-sm text-center"
            placeholder="Type a movie name..."
            onChange={handleChange}
          />
          {/* Clear Button */}
          <button
            onClick={handleClear}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar