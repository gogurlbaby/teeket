import React from "react";
import Tee from "../../assets/landing_images/landing_teeket_logo.svg";
import img from "../../assets/landing_images/Frame 163.svg";
import background_image from "../../assets/landing_images/landing_page.png";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, #2563eb,#172554),url(${background_image})`,
        }}
        className="md:flex md:flex-col md:justify-center md:items-center py-[2rem] h-screen w-full bg-blend-multiply  mx-auto"
      >
        <div className="flex justify-center pt-20 align-center">
          <img src={Tee} alt="logo" />
        </div>
        <div className="flex justify-center align-center mt-[3.063rem]">
          <img src={img} alt="" className="md:w-[40rem] lg:w-[60rem]"/>
        </div>
        <div className="flex items-center justify-center my-4">
          <h3 className="md:my-4 text-white font-normal text-center text-[18px]">
            Your one stop platform to create,manage and promote your events at
            your convinence.
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <button
          onClick={() => navigate("/login")}
            className="text-[#FFFFFF] font-medium text-base no-underline py-[1.125rem] px-[6rem] rounded-xl bg-[#0052F6]"
          >
            Create an event
          </button>
        </div>
        <div className="md:mt-[3rem] flex items-center justify-center mt-[1.5rem]">
           <button
           onClick={() => navigate("/discover-events")}
            className="md:px-[10rem] text-[#101010] font-medium text-base no-underline py-[1.125rem] px-[6rem] rounded-xl bg-[#FFFFFF]"
          >
            Discover events
            </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
