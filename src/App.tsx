import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


import Error from "./pages/Error";
import Home from "./pages/Home";
import MovieInfo from "./pages/Movie/MovieInfo";
import TVInfo from "./pages/TV/TVInfo";
import TVWatch from "./pages/TV/TVWatch";
import MovieWatch from "./pages/Movie/MovieWatch";
import Explore from "./pages/Explore";



function App() {
  const location = useLocation();
  // const currentUser = useAppSelector((state) => state.auth.user);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<MovieInfo />} />
      <Route path="tv/:id" element={<TVInfo />} />
      <Route path="movie/:id/watch" element={<MovieWatch />} />
      <Route path="tv/:id/watch" element={<TVWatch />} />
      <Route path="explore" element={<Explore />} />
       <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
