import React from "react";
import testimonials from "../../json_files/testimonials.json";
import back_arrow from "../../assets/other-images/backarrow.svg"
import forward_arrow from "../../assets/other-images/forwardarrow.svg"
import first_testimony from "./Frame 126.svg"
import second_testimony from "./Frame 136.svg"

function Testimonials() {
  return (
    <div class="pt-[1rem] pb-[4rem] ">
      <h4 class="font-bold text-[18px] text-[#000000] ml-[1rem]">
        Don’t take our word for it
      </h4>
      <div class="flex">
      <img className="d-block w-100" src={first_testimony} />
      <img className="d-block w-100" src={second_testimony} />
      </div>
       <div class="flex mt-[1.5rem] ml-[35%]">
         <img src={back_arrow} alt="back-arrow" class="mr-[0.813rem]"/>
         <img src={forward_arrow} alt="forward-arrow" class="ml-[0.813rem]" />
       </div>
    </div>
  );
}

export default Testimonials;
