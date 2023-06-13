import React from 'react'
import hero_logo from "../../assets/landing_images/landing_teeket_logo.svg"
import Background from "../../assets/homepage_images/background.png"

function Hero() {
  return (
     <div 
      style={{
      backgroundImage:`linear-gradient(180.01deg, #030A2E 0.01%, rgba(5, 12, 47, 0) 141.96%), 
      url(${Background})`, 
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat"
      }}
      class=" rounded-b-[50px] py-[6rem] mt-4">
        {/* <img src={hero_logo} alt="teeket-logo" class="mx-auto"/> */}
        <div class="text-white pt-10 px-10">
        <h1 class="text-[32px] font-bold">Struggling to sell tickets?</h1>
        <h6 class="text-[16px] font-normal mt-5">
            Create events and sell tickets in minutes-at no cost
            -with the only event platform you need
        </h6>
        </div>
        <button type="button"
         class="flex justify-center items-center py-[18px] px-[25%] mx-auto mt-[1.5rem] font-medium text-base text-[#FFFFFF] bg-[#0052F6] rounded-xl"
        >
         Create an event
        </button>
     </div>
  )
}

export default Hero;