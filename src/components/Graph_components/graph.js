import React from "react";
import tee from "../../assets/other-images/general_teeket_logo.svg"
 import graph1 from"../../assets/graph_images/graph 1.jpg"
 import graph2 from"../../assets/graph_images/graph 2.png"
 import graph3 from"../../assets/graph_images/graph 3.png"
 import go from "../../assets/graph_images/Frame 15.jpg"
 import btn from "../../assets/graph_images/dropdown - btn.png"
 import drop from"../../assets/graph_images/dropdown-list (1).png"
import info from "../../assets/graph_images/Info.jpg"
import jane from "../../assets/graph_images/jane.jpg"
import john from "../../assets/graph_images/john.jpg"
import daniel from "../../assets/graph_images/daniel.jpg"
import Dropdown from "react-bootstrap/Dropdown"
 

 function Graph(){
    


    let Tops=[
        {
         name:john,
         Attendees: "12 attendees  " 

        },
        {
            name:jane,
            Attendees: "81 attendees  " 
   
           },
           {
            name:daniel,
            Attendees: "122 attendees  " 
   
           }
    ]

         return(
            <>
            <nav className="flex justify-between p-3 border outline-1 ">
                  <div>
                    <img src={tee} alt="logo"></img>
                  </div>
                  <div>
                    <h3 className="p-2 bg-black text-white rounded-md "> Menu</h3>
                  </div>
            </nav>
            <div className="p-2 pt-8   ">
               <img src={go} className="text-xs font-thin  "  alt="frame"></img>
            </div>
            <div className="flex justify-between p-3" >
                <div>
                    <h2 className="font-semi-bold text-lg pb-2">Registration</h2>
                    <p className="font-light  text-gray-500">see all registered attendees detail</p>
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
                <img src={graph1} className="w-full p-4" alt="graph"></img>
            </div>
            <div className="p-3">
                <h3 className="text-lg  font-bold ml-4">Event views</h3>
            </div>
            <div className="flex justify-between p-2 pl-2 pr-2">
                <div className="flex flex-col p-2">
                   <h3 className="pb-3 pl-2 text-lg text-gray-400">Total views</h3>
                   <p className="font-bold text-lg pl-3">240</p>
                </div><div className="border-r-4   "> </div>
                <div className="flex flex-col p-2 ">
                   <h3 className="pb-3 pl-2 text-lg text-gray-400">Total RSVPs</h3>
                   <p className="font-bold text-lg pl-3">240</p>
                </div><div className="border-r-4    "> </div>
                <div className="flex flex-col p-2">
                   <h3 className="pb-3 pl-2 text-lg text-gray-400">Total Shares</h3>
                   <p className="font-bold text-lg pl-3">240</p>
                </div>
    
            </div>
            <div className=" flex  p-3">
                <h3 className="p-2 text-lg font-bold ">Top Referrers</h3>
                 <img  src={info} className="mt-4  h-4 w-8"alt="info"></img>
            </div>
            <div>
                {
                    Tops.map((top,index) =>{
                          return(
                            <div className=" flex justify-between justify-center p-3">
                                <img src={top.name} alt="name"></img>
                                 <h3 className="text-center text-md font-bold pt-2">{top.Attendees}</h3>
                                
                            </div>
                          )
                    }
                    )
                }
            </div>
            </>
         )



 }
 export default Graph