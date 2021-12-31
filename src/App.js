import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Quora from "./components/quora/Quora";
import SpaceOptions from "./components/spaceOptions/SpaceOptions";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/quora" element={<Quora />} />
          <Route path="/options" element={<SpaceOptions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
