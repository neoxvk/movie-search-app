import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  searchQuery: "",
  searchResult: [],
  favorites: [],
  loading: false,
  error: null,
  famousMovies:[],
  famousTVSeries:[]
};


const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload || [];
    },
    setSearchResult(state, action) {
      state.searchResult = action.payload || [];
    },
    setFavorites(state, action) {
      state.favorites = action.payload || [];
    },
    setLoading(state, action) {
      state.loading = action.payload || [];
    },
    setError(state, action) {
      state.error = action.payload || [];
    },
    clearSearchResult: (state) => {
      state.searchResult = []; 
    },
    setFamousMovies: (state,action) => {
      state.famousMovies = action.payload || [];

      console.log(action.payload)
    },
    setFamousTvSeries: (state,action) => {
      state.famousTVSeries = action.payload || [];
      
    }
  
  },
});
  

export const {
  setSearchQuery,
  setSearchResult,
  setFavorites,
  setLoading,
  setError,
  clearSearchResult,
  setFamousMovies,
  setFamousTvSeries,
} = movieSlice.actions;

export default movieSlice.reducer