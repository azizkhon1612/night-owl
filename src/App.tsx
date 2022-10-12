import { Route, Routes } from "react-router-dom";


import Error from "./pages/Error";
import Explore from "./pages/Explore";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MovieInfo from "./pages/Movie/MovieInfo";
import Search from "./pages/Search";

import TVInfo from "./pages/TV/TVInfo";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<MovieInfo />} />
      <Route path="tv/:id" element={<TVInfo />} />

      <Route path="explore" element={<Explore />} />
      <Route path="search" element={<Search />} />
      <Route path="auth" element={<Auth />} />
      
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
