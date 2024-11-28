import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Spinner from "./utils/spinner";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/test" element={<Spinner/>}/>
    </Routes>
      This is APp
    </>
  );
}

export default App;
