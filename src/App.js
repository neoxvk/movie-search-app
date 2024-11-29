import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Spinner from "./utils/spinner";
import RecommendedMovies from "./components/Recommended";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/test" element={<RecommendedMovies/>}/>

    </Routes>
    </>
  );
}

export default App;
