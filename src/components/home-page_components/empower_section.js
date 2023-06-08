import React from 'react'
import image from "../../assets/homepage_images/user pictures.jpg"

function EventCreators() {
  return (
    <div class="bg-[#FFFFFF] py-10">
        <div class="text-center">
            <h2 
            class="text-[24px] font-bold text-[#1A1919] text-center"
            >
            Empowering event creators everywhere
            </h2>
            <h6
            class="text-[14px] mt-[1rem] font-bold text-[#000000] text-center"
            >
            More than 1 million people  across 5 continents choose Teeket
            </h6>
        </div>
       <img src={image} class="mx-auto mt-[2rem]"/>
       </div>
  )
}

export default EventCreators