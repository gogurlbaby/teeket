import React from 'react'
import Hero from "../components/home-page_components/hero"
import Navbar from '../components/navbar_components/navbar'
import EventCreators from '../components/home-page_components/empower_section'
import TicketFeatures from '../components/home-page_components/ticket_features'
import TicketApp from '../components/home-page_components/ticket_app'
import Testimonials from '../components/home-page_components/testimonials'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
    <div>
        <EventCreators />
     </div>
     <div>
        <TicketFeatures />
     </div>
     <div>
        <TicketApp />
     </div>
     <div>
        {/* <Testimonials /> */}
     </div>
     <div>
        {/* Section With Button */}
     </div>
    </div>
  )
}

export default HomePage