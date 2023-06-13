import React, { useState } from "react";
import logo from "../../assets/other-images/general_teeket_logo.svg";

function NavbarLogin() {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!toggle);
    console.log("pressed");
  };

  return (
    <nav className="h-[110px] w-full flex justify-between pt-10 px-5 shadow-lg ">
      <img src={logo} alt="teeket-logo" className="mb-7" />
      <button
        type="button"
        className="bg-[#001133]  px-4 text-[#FFFFFF] rounded-[12px] text-sm- font-bold mb-6"
        onClick={toggleNavbar}
      >
        Menu
      </button>
    </nav>
  );
}

export default NavbarLogin;
