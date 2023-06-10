import React from "react";
<<<<<<< HEAD
import landing from "../assets/landing_images/Landing_pageoverlay.png";
import Tee from "../assets/landing_images/landing_teeket_logo.svg";
import girl from "../assets/landing_images/landing_image3.png"
import boy from "../assets/landing_images/landing_image5.png"
import img from "../assets/landing_images/landing_image1.png"
import back from"../assets/landing_images/landing_page.png"
=======
import landing from "../assets/images/landing_images/Landing_pageoverlay.png";
import Tee from "../assets/images/landing_images/landing_teeket_logo.svg";
import girl from "../assets/images/landing_images/landing_image3.png"
import boy from "../assets/images/landing_images/landing_image5.png"
import img from "../assets/images/landing_images/landing_image1.png"
import back from"../assets/images/landing_images/landing_page.png"
>>>>>>> e67990b (landing page for teeket app)
function Land() {
  return (
    <>
      <div
        style={{backgroundImage:`linear-gradient(to top, #2563eb,#172554),url(${back})` }}
        className="h-screen w-full bg-blend-multiply mx-auto" 
      >
        <div className="flex justify-center align-center pt-40 pb-10">
          <img src={Tee} alt="logo" />
        </div>
        <div className="flex justify-center align-center   ">
          <div className="flex justify-center align-center  flex-wrap space-x-3 w-1/2 h-40 mx-2  "  >
            
            <div className=" h-12 w-14 rounded-md bg-contain bg-no-repeat" >
            <img src={girl} className="w-full h-full" alt="logo" />
            </div>
            <div className="bg-blue-600  h-10 w-28 rounded-md text-center p-2 text-white font-bold ">#Trending</div>
            <div className=" mr-4 bg-yellow-400 h-10 w-24 pt-2 text-center rounded-md">Hot event</div>
            <div className=" h-12 w-14 rounded-md">
            <img src={boy} className="w-full h-full" alt="logo" />
                </div>
          </div>
          <div className="  rounded-md w-40 h-32 ">
          <img src={img} className="w-full h-full" alt="logo" />
          </div>
        </div>
          <div className=" flex items-center justify-center mb-4">
            <h3 className="text-white font-5x text-center w-1/2">
              Your one stop platform to create,manage and promote your events at your convinence. 
            </h3>
          </div>
          <div className=" flex items-center justify-center ">
            <a href="#" className="text-center text-white font-bold text-sm p-2 pl-24 pr-24 rounded-md bg-blue-800">

              Create an event
            </a>
          </div>
          <div className=" flex items-center justify-center ">
            <a href="#" className="text-center mt-3 font-bold text-sm p-2 pl-24 pr-24 rounded-md bg-white">
              
              Discover events
            </a>
          </div>
      </div>
    </>
  );
}

export default Land;
