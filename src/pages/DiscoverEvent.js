import React from "react";
import Events from "../components/Events";
import NavbarDiscover from "../components/navbar_components/NavbarDiscover";
import Footer from "../components/footer_components/Footer";

function DiscoverEvent() {
  return (
    <div>
      <NavbarDiscover />
      <Events />
      <Footer />
    </div>
  );
}

export default DiscoverEvent;
