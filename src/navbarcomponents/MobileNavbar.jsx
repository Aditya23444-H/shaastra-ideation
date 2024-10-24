import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Hamburger from "../assets/Hamburger.svg";
import SidebarClose from "../assets/SidebarClose.svg";

const MobileNavbar = () => {
  const array = ["Home","Open House","Exhibitions","Workshops","Events","Envisage","Spotlight","Industry Insights", "Passport", "Forgetmenot", "Sponsors", "Emulate","Summit", "TIF", "Encryption", "Sales"]; // Corrected spelling of "Testimonials"

  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="md:hidden">
      <img
        alt=""
        className="size-8 mr-10 cursor-pointer md:hidden"
        src={Hamburger}
        onClick={openMenu}
      />

      <ul id="menu" className={menuVisible ? "menuvisible overflow-x-auto w-72" : "hidden"}>
        <li>
          <img
            className="size-8 cursor-pointer right-10 fixed"
            src={SidebarClose}
            alt=""
            onClick={openMenu}
          />
        </li>
        {array.map((option, index) => {
          return (
            <li
              key={index}
              className="list-ham cursor-pointer solid hover:text-shadow-md"
            >
              {option}
            </li>
          );
        })}
        <div className="bg-p5 rounded-md mt-5">
          <p className="py-4 text-center text-xl text-white font-semibold hover:scale-125 font-serif">
            <a href="#">Login</a>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;

