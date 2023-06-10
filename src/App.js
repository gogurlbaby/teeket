import React from "react";
import Navbar from "./components/navbar_components/navbar"
import HomePage from "./pages/home.page";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./pages/landing";

function App() {

 
  return (
    <>
      <div className="App">{/* <Navbar /> */}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
