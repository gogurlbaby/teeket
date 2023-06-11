import React from "react"
import black_girl from "../../assets/footer_images/Image.svg"
import secure from "../../assets/footer_images/Secure.svg"
import white_girl from "../../assets/footer_images/Rectangle 1703.svg"
import connect from "../../assets/footer_images/Connect.svg"
import laptop_girl from "../../assets/footer_images/Rectangle 1708.svg"
import safe from "../../assets/footer_images/Safe.svg"
import black_man from "../../assets/footer_images/Rectangle 1704.svg"
import support from "../../assets/footer_images/Support.svg"
import white_man from "../../assets/footer_images/Rectangle 1706.svg"

function Footer() {
  return (
    <div class="w-full h-[835px] bg-[#110011] border-solid border-black border-2">
     <div class="
      w-[343px] 
      
      rounded-[16px]
      mt-[3rem] 
      pb-[2rem] 
      mx-[1rem]
      border-solid border-black border-2
      "
      style={{background: "linear-gradient(217.73deg, #FF0303 -11.96%, #0052F6 68.7%)"}}
      >
      <div class="flex gap-[0.5rem] mt-[1.75rem] ">
      <img src={black_girl} />
      <img src={secure} />
      <img src={white_girl}/>
      <img src={connect}/>
      <img src={laptop_girl}/>
      </div>
      <div class="flex gap-[0.5rem] ml-[0.938rem]">
      <img src={safe}/>
      <img src={black_man}/>
      <img src={support}/>
      <img src={white_man}/>
      </div>
      <h4
      class="font-bold text-[#FFFFFF] text-[20px] text-center mt-[0.75rem]"
      >
      Teeket for Events
      </h4>
      <h6
      class="font-[400] text-[14px] text-[#FFFFFF] text-center mt-[0.5rem]"
      >
      Great news! Teeket allows you connect with 
      other attendees at no cost.
      </h6>
      <button
      class="flex justify-center items-center py-[1rem] px-[3rem] bg-[#FFFFFF] text-[#0052F6] rounded-[16px] font-bold text-[12px] mt-[1.5rem] mx-auto"
      >
      Book and event
      </button>
      </div>
    </div>
  );
}

export default Footer;
