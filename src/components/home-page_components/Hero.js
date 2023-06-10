import React from 'react'
import hero_logo from "../../assets/landing_images/landing_teeket_logo.svg"

function Hero() {
  return (
     <div class="bg-[#000D26] rounded-b-[50px] pt-[6rem] pb-[3rem] mt-4">
        <img src={hero_logo} alt="teeket-logo" class="mx-auto"/>
        <div class="text-white text-center pt-10 px-10">
        <h1 class="text-[32px] font-bold">Struggling to sell tickets?</h1>
        <h6 class="text-[16px] font-normal mt-5">
            Create events and sell tickets in minutes-at no cost
            -with the only event platform you need
        </h6>
        </div>
     </div>
  )
}

export default Hero;