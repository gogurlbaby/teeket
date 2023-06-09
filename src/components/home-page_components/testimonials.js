import React from "react";
import testimonials from "../../json_files/testimonials.json";

function Testimonials() {
  return (
    <div>
      <h4 class="font-bold text-[18px] text-[#000000] ml-[1rem]">
        Don’t take our word for it
      </h4>
      {testimonials.map((item, index) => {
        return (
          <div class="mt-[1.5rem]" key={item.id}>
            <img src={item.icon} alt="icon_letter" />
            <h4>{item.fullname}</h4>
            {/* <img src={item.staricon}/> */}
            <p>{item.date}</p>
            <h6>{item.testimony}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonials;
