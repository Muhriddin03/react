import React from "react";
import Home from "./home/homes";
import Pages from "./home/pages";
import Navbar from "./home/navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Pages" element={<Pages />} />
      </Routes>
    </>
  );
}

export default App;
