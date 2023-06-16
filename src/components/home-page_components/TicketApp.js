import React from "react";
import app from "../../assets/homepage_images/phone.svg";

function TicketApp() {
  return (
    <div className="pb-[3rem]">
      <h4 className="md:text-[32px] font-bold text-[18px] text-[#000000] text-center">
        Do more with the Teeket App
      </h4>
      <h6 className="md:text-[24px] font-normal text-[14px] text-[#000000] text-center mt-[1rem]">
        Organize events like a Pro with our easy to use Teeket app featuring
        tools like check in, curated guestlists, marketing tools and much more
      </h6>
      <img src={app} className="md:min-w-[60%] mx-auto mt-[1.5rem]" alt="phone_image" />
      <h4 className="md:text-[32px] text-center font-bold text-[16px] text-[#2068F7]">
        That’s not all!
      </h4>
      <h6 className="md:text-[24px] font-normal text=[14px] text-center text-[#000000] mt-[0.5rem]">
        Get 30 days free access to promotion by our partners to attract more
        attendees and boost ticket sales for your events.
      </h6>
    </div>
  );
}

export default TicketApp;
