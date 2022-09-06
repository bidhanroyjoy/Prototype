import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Registration from './Pages/Registration';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/registration" element={ <Registration />} />
    </Routes>
  
    </div>
  );
}

export default App;
