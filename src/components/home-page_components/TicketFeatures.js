import React from "react";
import features from "../../json_files/features.json";

function TicketFeatures() {
  return (
    <div className="pb-[3rem] rounded-t-[20px] bg-[linear-gradient(180.08deg, rgba(208, 219, 241, 0.19) -119.88%, rgba(0, 82, 246, 0) 90.4%)]">
      <h4 className="md:text-center md:text-[24px] text-[#0052F6] font-bold text-[18px] ml-[1rem]">
        Teeket Features
      </h4>
      {features.map((feature, index) => {
        return (
          <div className="md:flex md:flex-col md:justify-center md:items-center pt-[1.5rem]" key={feature.id}>
            <div className="flex ml-[1rem]">
              <h6 className="md:text-[18px] text-[14px] font-bold text-blue-400">
                {feature.number}
              </h6>
              <h3 className="md:text-[24px] text-[14px] font-bold text-[#2068F7] ml-[0.5rem]">
                {feature.title}
              </h3>
            </div>
            <h6 className="md:text-[18px] text-[14px] font-[400px] text-[#000000] mt-[0.5rem] ml-[1rem]">
              {feature.description}
            </h6>
            <img
              src={feature.image}
              className="md:min-w-[50%] mx-auto mt-[1.5rem]"
              alt="event ticketing"
            />
          </div>
        );
      })}
    </div>
  );
}

export default TicketFeatures;
