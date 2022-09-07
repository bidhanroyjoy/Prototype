import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./Pages/Registration";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./Pages/Footer";
import "./App.css";

function App() {
  const [active, setActive] = useState("home");
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Registration />
      <Footer />
      <Routes>
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/registration" element={<Registration setActive={setActive}/>} />   */}
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
