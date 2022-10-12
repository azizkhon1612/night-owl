import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


import Error from "./pages/Error";
import Explore from "./pages/Explore";

import Home from "./pages/Home";
import MovieInfo from "./pages/Movie/MovieInfo";

import TVInfo from "./pages/TV/TVInfo";


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <Routes>
     <Route index element={<Home />} />
      <Route path="movie/:id" element={<MovieInfo />} />
      <Route path="tv/:id" element={<TVInfo />} />
      <Route path="explore" element={<Explore />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
