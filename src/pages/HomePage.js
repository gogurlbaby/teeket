import React from "react";
import Hero from "../components/home-page_components/Hero";
import Navbar from "../components/navbar_components/Navbar";
import EventCreators from "../components/home-page_components/EventCreators";
import TicketFeatures from "../components/home-page_components/TicketFeatures";
import TicketApp from "../components/home-page_components/TicketApp";
// import Testimonials from '../components/home-page_components/Testimonials'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventCreators />
      <TicketFeatures />
      <TicketApp />
      {/* <Testimonials /> */}
      {/* Section With Button */}
    </div>
  );
}

export default HomePage;
