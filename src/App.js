import React from "react";

import Navbar from "./components/navbar_components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import Dicover from "./pages/Dicover";

function App() {
  return (
    <>
      <div className="App">{/* <Navbar /> */}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="discover-event" element={<Dicover />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
