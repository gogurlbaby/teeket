import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Graph from "./components/Graph_components/graph.js"
import DiscoverEvent from "./pages/DiscoverEvent";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
