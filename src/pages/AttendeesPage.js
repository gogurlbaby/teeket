import React from 'react'
import Attendees from '../components/attendees_componnts/Attendees'
import Hero from '../components/attendees_componnts/Hero'
import NavBar from '../components/navbar_components/Navbar'

function AttendeesPage() {
  return (
    <div>
     <NavBar />
     <Hero />
     <Attendees />
    </div>
  )
}

export default AttendeesPage