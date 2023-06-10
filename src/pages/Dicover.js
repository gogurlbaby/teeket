import React from "react";
import filterImage from "../assets/images/discoverpage_images/filter.png";
import Eventdiv from "../components/navbar_components/Eventdiv";
import "../App.css";
import { eventArray } from "../Eventdata";

function Dicover() {
  return (
    <div>
      <main className="discover-main">
        <div className="div-0">
          <h1 className="header1">Discover events near you</h1>
          <form>
            <input
              type="text"
              placeholder="Search all events"
              className="search-bar"
            />
          </form>
          <div className="filter-icon">
            <img src={filterImage} alt="icon" />
          </div>
        </div>

        <div className="div-1">
          <Eventdiv backgroundColor="#FBBF0A"></Eventdiv>
          <Eventdiv backgroundColor="#EEEEEE" />
        </div>
        <div className="div-2">
          <Eventdiv backgroundColor="#B0E298" />
          <Eventdiv backgroundColor="#FFC971" />
        </div>
        <h2>Upcoming Event</h2>
        <div className=" flex">
          <div className="div-3">
            <div className="div-date">
              <span className="span1">{eventArray[0].date}</span>
              <span className="span0">{eventArray[0].price}</span>
            </div>
            <h3>{eventArray[0].title}</h3>
            <div className="div-icon">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[0].icon +
                  ".png")}
                alt="icon"
                className="icon0"
              />
              <span className="span-name">{eventArray[0].name}</span>
            </div>
            <div className="div-location">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[0].mapline +
                  ".png")}
                alt="img"
                className="map0"
              />
              <span className="span-location">{eventArray[0].location}</span>
            </div>
          </div>

          <div className="img-div0">
            <img
              src={require("../assets/images/discoverpage_images/" +
                eventArray[0].image +
                ".png")}
              alt=""
              className="imag0"
            />
          </div>
        </div>

        <div className=" flex">
          <div className="div-3">
            <div className="div-date">
              <span className="span1">{eventArray[1].date}</span>
              <span className="span2">{eventArray[1].price}</span>
            </div>
            <h3>{eventArray[1].title}</h3>
            <div className="div-icon">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[1].icon +
                  ".png")}
                alt="icon"
                className="icon1"
              />
              <span className="span-name">{eventArray[1].name}</span>
            </div>
            <div className="div-location">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[1].mapline +
                  ".png")}
                alt="img"
                className="map1"
              />

              <span className="span-location">{eventArray[1].location}</span>
            </div>
          </div>

          <div className="img-div1">
            <img
              src={require("../assets/images/discoverpage_images/" +
                eventArray[1].image +
                ".png")}
              alt=""
              className="imag1"
            />
          </div>
        </div>

        <div className=" flex">
          <div className="div-3">
            <div className="div-date">
              <span className="span1">{eventArray[2].date}</span>
              <span className="span2">{eventArray[2].price}</span>
            </div>
            <h3 className="third-h3">{eventArray[2].title}</h3>
            <div className="div-icon">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[2].icon +
                  ".png")}
                alt="icon"
                className="icon2"
              />
              <span className="span-name">{eventArray[2].name}</span>
            </div>
            <div className="div-location">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[2].mapline +
                  ".png")}
                alt="img2"
                className="map2"
              />
              <span className="span-location">{eventArray[2].location}</span>
            </div>
          </div>

          <div className="img-div2">
            <img
              src={require("../assets/images/discoverpage_images/" +
                eventArray[2].image +
                ".png")}
              alt="img"
              className="imag2"
            />
          </div>
        </div>

        <div className="btn-div">
          <button type="button" className="btn">
            Dicover More
          </button>
        </div>

        <div className="hidden-div">
          <h1 className="sport-heading">Sport Events</h1>

          <div className=" flex">
            <div className="div-3">
              <div className="div-date">
                <span className="span1">{eventArray[3].date}</span>
                <span className="span0">{eventArray[3].price}</span>
              </div>
              <h3 className="third-h3">{eventArray[3].title}</h3>
              <div className="div-icon">
                <img
                  src={require("../assets/images/discoverpage_images/" +
                    eventArray[3].icon +
                    ".png")}
                  alt="icon"
                  className="icon3"
                />
                <span className="span-name">{eventArray[3].name}</span>
              </div>
              <div className="div-location">
                <img
                  src={require("../assets/images/discoverpage_images/" +
                    eventArray[3].mapline +
                    ".png")}
                  alt="img2"
                  className="map3"
                />
                <span className="span-location">{eventArray[3].location}</span>
              </div>
            </div>

            <div className="img-div3">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[3].image +
                  ".png")}
                alt="img"
                className="imag3"
              />
            </div>
          </div>

          <div className=" flex">
            <div className="div-3">
              <div className="div-date">
                <span className="span1">{eventArray[4].date}</span>
                <span className="span2">{eventArray[4].price}</span>
              </div>
              <h3 className="third-h3">{eventArray[4].title}</h3>
              <div className="div-icon">
                <img
                  src={require("../assets/images/discoverpage_images/" +
                    eventArray[4].icon +
                    ".png")}
                  alt="icon"
                  className="icon4"
                />
                <span className="span-name">{eventArray[4].name}</span>
              </div>
              <div className="div-location">
                <img
                  src={require("../assets/images/discoverpage_images/" +
                    eventArray[4].mapline +
                    ".png")}
                  alt="img2"
                  className="map4"
                />
                <span className="span-location">{eventArray[4].location}</span>
              </div>
            </div>

            <div className="img-div4">
              <img
                src={require("../assets/images/discoverpage_images/" +
                  eventArray[4].image +
                  ".png")}
                alt="img"
                className="imag4"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dicover;
