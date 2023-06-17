import React from "react";
import NavbarBook from "../components/navbar_components/NavbarBook";
import Footer from "../components/footer_components/Footer";
import Attendees from "../components/attendees_components/Attendees";
import HeroAttendee from "../components/attendees_components/HeroAttendee";

function AttendeesEvent() {
  return (
    <div>
      <NavbarBook />
      <HeroAttendee />
      <Attendees />
      <Footer />
    </div>
  );
}

export default AttendeesEvent;
