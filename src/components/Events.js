import React from "react";
import "../App.css";
import filterImage from "../assets/discoverpage_images/filter.png";
import music from "../assets/discoverpage_images/music_note.png";
import { eventArray } from "../Eventdata";
import { useState } from "react";
import { remainEvents } from "../Eventdata";

function Events() {
  //Button functionality
  // eslint-disable-next-line no-unused-vars
  const [displayedObjects, setDisplayedObjects] = useState([]);
  const [showHiddenObjects, setShowHiddenObjects] = useState(false);
  const handleButtonClick = () => {
    setShowHiddenObjects(true);
    setDisplayedObjects(remainEvents);
  };

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [newSerch, setSearchResults] = useState(eventArray);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = eventArray.filter((object) =>
      object.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="md:flex md:justify-center md:items-center overflow-hidden">
      <main className="pl-[2rem] pr-[2rem] w-full ">
        <h1 className="mt-[3rem] mb-[1rem] text-[24px] font-medium">
          Discover events near you
        </h1>
        <div className="flex mb-[1rem] justify-between text-center ">
          <form>
            <input
              className="md: bg-[#827f7f30] border-none w-[220px] h-[48px] rounded-[.6rem]
               lg:w-[50rem] md: bg-[#827f7f30] border-none w-[279px] h-[48px] rounded-[.6rem]
               lg:w-[50rem]"
              type="text"
              placeholder="Search all events"
              classNameName="search-bar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
          <div className="w-[35%] pl-[2rem] md:w-[35%] pl-[2rem]">
            {<img src={filterImage} alt="icon" />}
          </div>
        </div>
        <div class=" mx-auto">
          <div className="flex justify-between pb-[1rem]  ">
            <div className="w-[43%] h-[84px]     lg:h-[100px] lg:pl-[3rem] lg:pt-[1rem]    bg-[#FBBF0A] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Music</p>
            </div>
            <div className="h-[84px] w-[43%]    lg:h-[100px] lg:pl-[3rem] lg:pt-[1rem]    bg-[#EEEEEE] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Tech</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[43%] h-[95px]     lg:h-[100px]  lg:pl-[3rem] lg:pt-[1rem]      bg-[#B0E298] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Arts and Culture </p>
            </div>
            <div className="h-[95px] w-[43%]      lg:h-[100px]  lg:pl-[3rem] lg:pt-[1rem]     bg-[#FFC971] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
              <img src={music} alt="music-icon" />
              <p>Business</p>
            </div>
          </div>
        </div>

        <h2 className="text-[24px] font-bold mt-[1.5rem]">Upcoming Event</h2>

        {newSerch.map(function (item) {
          return (
            <div
              className="
               w-[325px] h-[172px] flex justify-between pl-[0.6rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10] -ml-[0.6px] shadow-sm pb-[1rem] 
                rounded-[.5rem] pl-[10px]
                md:w-[349px] lg:w-[90%] h-[172px] flex justify-between 
                border-2 mt-[1.4rem]  border-[#4d4d4d10]   shadow-sm  px-[.6rem] py-[.6rem]
                rounded-[.5rem]  mx-auto"
              key={item.id}
            >
              <div className="w-[55%] py-[.5rem] ">
                <div className="flex ">
                  <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                    {item.date}
                  </span>
                  <span
                    className="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                  >
                    {item.price}
                  </span>
                </div>

                <h3 className="w-[110%]  text-[16px] text-[black] font-bold lg:text-[18px]">
                  {item.title}
                </h3>

                <div className="flex w-[90%] mt-[.6rem] ">
                  <img src={item.icon} alt="icon" />

                  <p className="text-[14px] w-[20rem]  mt-[0.8rem] ml-[.7rem] lg:text-[16px]">
                    {item.name}
                  </p>
                </div>

                <div className="flex mt-[.5rem]">
                  <img src={item.mapline} alt="mapline" />
                  <span class="text-[12px] ml-[.2rem]">{item.location}</span>
                </div>
              </div>

              <div className="w-[45%]  pl-[2rem] lg:pl-[22rem]">
                <img src={item.image} alt="icon" class="lg:w-[100%]" />
              </div>
            </div>
          );
        })}

        <div class="mx-auto  text-center lg:mx-auto">
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-[270px] bg-[#E1E4EB] text-center rounded-xl h-[60px] mt-[1rem] lg:w-[90%] md: w-[343px] bg-[#E1E4EB] text-center rounded-xl h-[60px] mt-[1rem] lg:w-[90%]"
          >
            Discover more
          </button>
        </div>

        {showHiddenObjects
          ? remainEvents.map((item) => (
              <div>
                <h2 className="text-[24px] font-bold mt-[1.5rem]">
                  {item.heading}
                </h2>
                <div
                  className="w-[325px] h-[172px] flex justify-between pl-[0.6rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10] -ml-[0.6px] shadow-sm pb-[1rem] 
                rounded-[.5rem] pl-[10px] md:w-[349px] lg:w-[90%] mx-auto h-[172px] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem]"
                  key={item.id}
                >
                  <div className="w-[50%] py-[.7rem] ">
                    <div className="flex">
                      <span className="text-[12px] font-medium w-[58px] text-[#989898] text-center ">
                        {item.date}
                      </span>
                      <span
                        className="text-[#FF0303] bg-[#ff09092e] w-[59px] text-[12px] font-semibold  
                     text-center "
                      >
                        {item.price}
                      </span>
                    </div>

                    <h3 className="-w[120%] text-[16px] text-[black] font-bold lg:text-[18px]">
                      {item.title}
                    </h3>

                    <div className="flex w-[90%] mt-[.6rem]">
                      <img src={item.icon} alt="icon" />
                      <p className="text-[12px]  mt-[0.8rem] w-[20rem] lg:text-[14px]  ml-[.4rem] ">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex mt-[0.5rem]">
                      <img src={item.mapline} alt="mapline" />
                      <span class="text-[12px]  ml-[.2rem]">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="w-[45%]  pl-[2rem] lg:pl-[22rem]">
                    <img src={item.image} alt="icon" class="lg:w-[100%]" />
                  </div>
                </div>
              </div>
            ))
          : null}
      </main>
    </div>
  );
}

export default Events;
