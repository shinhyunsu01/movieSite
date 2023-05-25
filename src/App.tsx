import React from "react";

import Movies from "./Pages/Movies";

import { Route, Routes } from "react-router-dom";
import NonePage from "./Pages/NonePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/*" element={<NonePage />} />
    </Routes>
  );
}

export default App;
