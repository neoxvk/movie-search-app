import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchQuery : '',
    searchResult : [],
    favorites : [],
    loading : false,
    error : null
}
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
  },
});

export const {
  setSearchQuery,
  setSearchResult,
  setFavorites,
  setLoading,
  setError,
  clearSearchResult,
} = movieSlice.actions;

export default movieSlice.reducer