import React from "react";
import back_arrow from "../../assets/other-images/backarrow.svg";
import forward_arrow from "../../assets/other-images/forwardarrow.svg";
import first_testimony from "../../assets/homepage_images/Frame 126.svg";
import second_testimony from "../../assets/homepage_images/Frame 136.svg";
import Carousel from "./Carousel/Carousel";

function Testimonials() {
  return (
    <div class="md:flex md:flex-col md:justify-center md:items-center pt-[1rem] pb-[4rem] ">
      <h4 class="md:text-[20px] font-bold text-[18px] text-[#000000] ml-[1rem]">
        Don’t take our word for it
      </h4>
      <Carousel />
    </div>
  );
}

export default Testimonials;
