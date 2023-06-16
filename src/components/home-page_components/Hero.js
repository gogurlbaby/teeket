import React from "react";
import Background from "../../assets/homepage_images/background.svg";
import { Link } from "react-router-dom"
function Hero() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180.01deg, #030A2E 0.01%, rgba(5, 12, 47, 0) 141.96%), 
      url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="lg:py-[5.5rem] lg:h-[30rem] md:py-[15rem] md:rounded-b-[80px] w-full rounded-b-[50px] py-[4rem] mt-4"
    >
      <div className="text-white pt-10">
        <div className="md:text-center text-white px-10">
          <h1 className="md:text-[38px] text-[32px] font-bold">Struggling to sell tickets?</h1>
          <h6 className="md:text-[20px] text-[16px] font-normal mt-4">
            Create events and sell tickets in minutes-at no cost -with the only
            event platform you need
          </h6>
        </div>
        <Link to="/login">
        <button
          type="submit"
          className="
          md:text-[24px] 
          md:mt-[3rem] 
          md:py-[2rem]
          md:px-[10rem] 
          md:rounded-2xl
          flex 
          justify-center 
          items-center 
          py-[1.125rem] 
          px-[5.5rem] 
          mx-auto mt-[1.5rem] 
          font-medium 
          text-base 
          text-[#FFFFFF] 
          bg-[#0052F6] 
          rounded-xl
          "
          >
          Create an event
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
