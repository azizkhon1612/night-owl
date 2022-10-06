
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
   
    </Routes>
  );
}

export default App;
