import React from "react";
import graph1 from "../../assets/graph_images/Graph.svg";
import info from "../../assets/graph_images/Info.svg";
import jane2 from "../../assets/graph_images/jane3.svg";
import john2 from "../../assets/graph_images/john3.svg";
import daniel2 from "../../assets/graph_images/daniel3.svg";
import Dropdown from "react-bootstrap/Dropdown";
import NavBar from "../navbar_components/Navbar";
import vector from "../../assets/graph_images/Vector.svg";
import { useNavigate } from "react-router-dom";

function Graph() {

  const navigate = useNavigate()
  
  let Tops = [
    {
      name: john2,
      Email: "john.doe@gmail.com",
      Attendees: "12 attendees  ",
    },
    {
      name: jane2,
      Email: "jane.doe@gmail.com",
      Attendees: "81 attendees  ",
    },
    {
      name: daniel2,
      Email: "daniel_prince2023@go...",
      Attendees: "122 attendees  ",
    },
  ];

  return (
    <>
    
      <NavBar />
      <div className="">
      <div className=" justify-center align-center md:p-[1.5rem]">
        <div className="flex p-4">
          <img src={vector} alt="frame" className="relative top-1"/>
            <button 
            onClick={() => {navigate("/home")}}
            className="pl-4 pt-1 text-base font-semi-bold no-underline md:text-[18px] ">
            Go Back
            </button>
        </div>
        <div className="flex justify-between p-2">
          <div className="pl-3">
            <h2 className="font-semi-bold text-lg pb-2 md:text-[26px]">Registration</h2>
            <p className="font-light  text-gray-500 lg:text-[18px]">
              See all registered attendees detail
            </p>
          </div>
          <div /*relative pt-2*/>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Past month
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/today">Today</Dropdown.Item>
                <Dropdown.Item href="#/last-days">Last 7 days</Dropdown.Item>
                <Dropdown.Item href="#/past-month">Past month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="flex justify-center p-2">
          <img src={graph1} className="w-full mr-auto" alt="graph"/>
        </div>
        <div className="p-3">
          <h3 className="text-base pt-3 font-bold ml-4 md:text-[24px]">Event views</h3>
        </div>
        <div className="flex justify-between p-1 pl-2 pr-2">
          <div className="flex flex-col p-2">
            <h3 className="pb-3 pl-2 text-lg text-gray-400 md:text-[24px]">Total views</h3>
            <p className="font-bold text-base pl-3 md:text-center md:text-[20px]">240</p>
          </div>
          <div className="border-r-4   "> </div>
          <div className="flex flex-col p-2 ">
            <h3 className="pb-3 pl-2 text-lg text-gray-400 md:text-[24px]">Total RSVPs</h3>
            <p className="font-bold text-base pl-3 md:text-center md:text-[20px]">24</p>
          </div>
          <div className="border-r-4    "> </div>
          <div className="flex flex-col p-2">
            <h3 className="pb-3 pl-2 text-lg text-gray-400 md:text-[24px]">Total Shares</h3>
            <p className="font-bold text-base pl-3 md:text-center md:text-[24px]">30</p>
          </div>
        </div>
        <div className=" flex p-3 pt-4">
          <h3 className=" text-lg font-bold ">Top Referrers</h3>
          <img src={info} className="mt-2 ml-2 h-4 w-8" alt="info"></img>
        </div>
        <div>
          {Tops.map((top, index) => {
            return (
              <div className="md:justify-between flex">
                <div className="flex p-3">
                  <img
                    src={top.name}
                    className="rounded-full"
                    alt="name"
                    />
                  <h6 className="pl-2 pt-1 font-semi-bold text-gray-600 md:text-[24px]">
                    {top.Email}
                  </h6>
                </div>

                <h6 className="text-base font-medium ml-12 mt-3 font-semi-bold text-gray-600 md:text-[24px]">{top.Attendees}</h6>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}
export default Graph;
