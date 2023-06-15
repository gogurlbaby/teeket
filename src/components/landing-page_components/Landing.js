import React from "react";
import Tee from "../../assets/landing_images/landing_teeket_logo.svg";
import girl from "../../assets/landing_images/landing_image3.svg";
import boy from "../../assets/landing_images/landing_image5.svg";
import img from "../../assets/landing_images/landing_image1.svg";
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
          <div className="flex justify-center align-center flex-wrap space-x-3 w-1/2 h-40 mx-2">
            <div className="h-12 w-14 rounded-md bg-contain bg-no-repeat">
              <img src={girl} className="w-full" alt="logo" />
            </div>
            <div className="flex justify-center items-center bg-[#03A4FF] h-12 w-28 rounded-xl text-white font-bold">
              #Trending
            </div>
            <div className="flex justify-center items-center bg-[#FDD015] h-12 w-24 text-[#101010] font-bold text-[16px] rounded-xl">
              Hot event
            </div>
            <div className="h-12 w-14">
              <img src={boy} className="w-full" alt="logo" />
            </div>
          </div>
          <div className="w-40 h-32 mt-2 mr-3">
            <img src={img} className="w-full" alt="logo" />
          </div>
        </div>
        <div className=" flex items-center justify-center mb-4">
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
