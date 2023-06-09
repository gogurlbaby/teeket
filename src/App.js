import React from "react";
// import Navbar from "./components/navbar_components/navbar"
import HomePage from "./pages/home.page";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">{/* <Navbar /> */}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
