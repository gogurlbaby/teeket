import React from "react";
import Carousel from "./Carousel/Carousel";

function Testimonials() {
  return (
    <div class="md:flex md:flex-col md:justify-center md:items-center pt-[1rem] pb-[4rem] ">
      <h4 class="md:text-[32px] font-bold text-[18px] text-[#000000] ml-[1rem]">
        Don’t take our word for it
      </h4>
      <Carousel />
    </div>
  );
}

export default Testimonials;
