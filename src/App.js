import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Graph from "./components/Graph_components/graph.js";
import DiscoverEvent from "./pages/DiscoverEvent";
import AttendeesEvent from "./pages/AttendeesEvent";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/discover-events" element={<DiscoverEvent />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/trending-events" element={<AttendeesEvent />} />
        </Routes>
      </BrowserRouter>
       <ToastContainer />
    </>
  );
}

export default App;
