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
    <div class="md:flex md:justify-center md:items-center overflow-hidden">
      <main class="pl-[0.9rem] pr-[1rem] ">
        <h1 class="mt-[2.5rem] mb-[1rem] text-[28px] font-light">
          Discover events near you
        </h1>
        <div class="flex mb-[1rem]">
          <form>
            <input
              class="bg-[#827f7f30] border-none w-[279px] h-[48px] rounded-[.6rem] 
              "
              type="text"
              placeholder="Search all events"
              className="search-bar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
          <div className="w-[35%] pl-[2rem]">
            {<img src={filterImage} alt="icon" />}
          </div>
        </div>

        <div class="flex gap-x-[2rem] pb-[1rem]">
          <div class="md:w-[200px] md:h-[100px] w-[164px] h-[84px] bg-[#FBBF0A] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Music</p>
          </div>
          <div class="md:w-[200px] md:h-[100px]h-[84px] w-[164px]  bg-[#EEEEEE] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Tech</p>
          </div>
        </div>
        <div class="flex gap-x-[2rem]">
          <div class="md:w-[200px] md:h-[100px] w-[164px] h-[84px] bg-[#B0E298] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Arts and Culture </p>
          </div>
          <div class="md:w-[200px] md:h-[100px] h-[84px] w-[164px]  bg-[#FFC971] rounded-[0.6rem] pl-[1rem] pt-[1rem]">
            <img src={music} alt="music-icon" />
            <p>Business</p>
          </div>
        </div>

        <h2 className="text-[24px] font-bold mt-[1.5rem]">Upcoming Event</h2>

        {newSerch.map(function (item) {
          return (
            <div
              className="w-[335px] h-[180px] ml-[1rem] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem]  border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem] "
              key={item.id}
            >
              <div className="w-[45%]">
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

                <h3 className="-w[120%] text-[16px] text-[black] font-bold">
                  {item.title}
                </h3>

                <div className="flex w-[90%] mt-[1rem]">
                  <img src={item.icon} alt="eventcreator" />
                  <p className="text-[12px] w-[20rem]  ml-[.4rem] mt-[1rem]">
                    {item.name}
                  </p>
                </div>

                <div className="flex mt-[1rem]">
                  <img src={item.mapline} alt="mapline" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="w-[55%]  mt-[.7rem] pl-[4rem]">
                <img src={item.image} alt="eventimage" />
              </div>
            </div>
          );
        })}

        <div className=" ml-[0.6rem]">
          <button
            type="button"
            onClick={handleButtonClick}
            className=" w-[343px] bg-[#E1E4EB] text-center h-[60px] mt-[1rem] text-xl rounded-lg"
          >
            Discover more
          </button>
        </div>

        {showHiddenObjects
          ? remainEvents.map((item) => (
              <div>
                <h2 class="text-[24px] font-bold mt-[1.5rem]">
                  {item.heading}
                </h2>
                <div
                  class="w-[349px] ml-[1rem] h-[172px] flex justify-between pl-[1rem] pt-[1rem] 
                border-2 mt-[1.5rem] border-[#4d4d4d10]  pr-[1rem] shadow-sm pb-[1rem] 
                rounded-[.5rem]"
                  key={item.id}
                >
                  <div className="w-[45%]">
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

                    <h3 className="-w[120%] text-[16px] text-[black] font-bold">
                      {item.title}
                    </h3>

                    <div className="flex w-[90%] mt-[1rem]">
                      <img src={item.icon} alt="eventcreator" />
                      <p className="text-[12px] w-[20rem]  ml-[.4rem] ">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex mt-[1rem]">
                      <img src={item.mapline} alt="mapline" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="w-[55%]  mt-[.7rem] pl-[4rem]">
                    <img src={item.image} alt="eventimage" />
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
