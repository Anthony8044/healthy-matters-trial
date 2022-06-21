import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/recent-articles" />} />
        <Route path="/recent-articles" element={<Home />} />
        <Route path="/zh/recent-articles" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
