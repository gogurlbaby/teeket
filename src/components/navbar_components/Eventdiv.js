import React from "react";
import musicIcon from "./../../assets/images/discoverpage_images/music_note.png";

function Eventdiv(props) {
  return (
    <div
      style={{
        width: "168px",
        height: "84px",
        backgroundColor: props.backgroundColor,
      }}
    >
      <img src={musicIcon} alt="musicIcon" />
    </div>
  );
}

export default Eventdiv;
