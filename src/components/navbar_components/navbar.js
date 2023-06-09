import React, { useState } from "react";
import logo from "../../assets/other-images/general_teeket_logo.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!toggle);
    console.log("pressed");
  };

  return (
    <nav className="h-[80px] w-full flex justify-between pt-10 px-5">
      <img src={logo} alt="teeket-logo" />
      <button
        type="button"
        className="bg-[#001133] py-3 pb-8 px-4 text-[#FFFFFF] rounded-[12px] text-sm- font-bold"
        onClick={toggleNavbar}
      >
        Menu
      </button>
      {/* <Link to="login">
        <button
          type="button"
          className="bg-[#001133] py-3 px-5 text-[#FFFFFF] rounded-[12px] text-sm- font-bold"
          onClick={toggleNavbar}
        >
          Login
        </button>
      </Link> */}
      {/* <ul class="list-none">
          <li style={{marginTop: "1rem"}}><a href="#" style={{textDecoration: "none"}}>Home</a></li>
          <li style={{marginTop: "1rem"}}><a href="#" style={{textDecoration: "none"}}>Discover Events</a></li>
          <li style={{marginTop: "1rem"}}><a href="#" style={{textDecoration: "none"}}>Login</a></li>
        </ul> */}
    </nav>
  );
}

export default Navbar;
