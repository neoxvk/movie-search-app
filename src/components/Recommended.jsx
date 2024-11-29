import { useSelector } from "react-redux";

const RecommendedMovies = () => {
const famousMovies = useSelector((state) => state.movies.famousMovies);
const famousTVSeries = useSelector((state) => state.movies.famousTVSeries);
 const movies = useSelector((state) => state.movies.searchResult) || [];

console.log("I am in recommendations", movies);
    
    return (
      <>
        {famousMovies.map((item) => {
          <p>{item.Title}</p>;
        })}
      </>
    );
}

export default RecommendedMovies;