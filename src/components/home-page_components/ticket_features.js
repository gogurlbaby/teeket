import React from 'react'
import features from "../../json_files/features.json"

function TicketFeatures() {
  return (
    <div class="pb-[3rem] rounded-t-[20px] bg-[linear-gradient(180.08deg, rgba(208, 219, 241, 0.19) -119.88%, rgba(0, 82, 246, 0) 90.4%)]">
        <h4 class="text-[#0052F6] font-bold text-[18px] ml-[1rem]">
        Teeket Features
        </h4>
        {features.map((feature, index) => {
            return(
                <div class="pt-[1.5rem]" key={feature.id}>
                <div class="flex ml-[1rem]">
                <h6 class="text-[14px] font-bold text-blue-400">
                 {feature.number}
                </h6>
                <h3
                class="text-[14px] font-bold text-[#2068F7] ml-[0.5rem]"
                >
                {feature.title}</h3>
                </div>
                <h6
                class="text-[14px] font-[400px] text-[#000000] mt-[0.5rem] ml-[1rem]"
                >
                 {feature.description}
                </h6>
                 <img src={feature.image} class="mx-auto mt-[1.5rem]" />
              </div>
            )
        })}
    </div>
  )
}

export default TicketFeatures