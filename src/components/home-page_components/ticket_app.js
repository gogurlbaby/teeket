import React from 'react'
import app from "../../assets/homepage_images/phone.png"

function TicketApp() {
  return (
    <div class="pb-[3rem]">
        <h4
        class="font-bold text-[18px] text-[#000000] text-center"
        >
        Do more with the Teeket App
        </h4>
        <h6
        class="font-normal text-[14px] text-[#000000] text-center mt-[1rem]"
        >
        Organize events like a Pro with our easy to use Teeket app
        featuring tools like check in, curated guestlists, marketing 
        tools and much more
        </h6>
        <img src={app} 
         class="mx-auto mt-[1.5rem]"
        />
        <h4
        class="text-center font-bold text-[16px] text-[#2068F7]"
        >
        That’s not all!
        </h4>
        <h6
        class="font-normal text=[14px] text-center text-[#000000] mt-[0.5rem]"
        >
        Get  30 days free access to  promotion by our partners to 
        attract more attendees and boost  ticket sales  for your  events.
        </h6>
    </div>
  )
}

export default TicketApp