import { useEffect , useState} from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

console.log(API_KEY)
const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)


    console.log(`${BASE_URL}?s=${query}&apikey=3864b029`);

    useEffect(()=> {
        //For edge case
        if(!query) return;

        console.log("API key", API_KEY)

        const fetchMovies = async() => {
            setLoading(true);
            setError(null)
               try {
                 const response = await axios.get(
                   ` https://www.omdbapi.com/?s=${query}&apikey=3864b029`
                   //    `${BASE_URL}?s=${query}&apikey=3864b029`
                 );
                  setData(response.data.Search || []);
               } catch (e) {
                 console.log("Something went wrong", e);
                 setError("Something went wrong", e);
               }
               finally{
                setLoading(false)
               }
        }

      fetchMovies()


    },[query])

    return {data, loading, error}
   
 
};

export default useFetch;
