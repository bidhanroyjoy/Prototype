import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Homepage, Login } from "./Pages";
import Gallery from "./components/Gallery/Gallery";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registration" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
