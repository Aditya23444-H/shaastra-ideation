import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../assets/icons/Hamburger.svg";
import SidebarClose from "../../assets/icons/SidebarClose.svg";

const MobileNavbar = ({ isClicked, scrollToSection }) => {
  const array = ["Home", "About", "Testimonials", "FAQs"]; // Corrected spelling of "Testimonials"

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

      <ul id="menu" className={menuVisible ? "menuvisible" : "hidden"}>
        <li>
          <img
            className="size-8 cursor-pointer ml-28"
            src={SidebarClose}
            alt=""
            onClick={openMenu}
          />
        </li>
        {array.map((option, index) => {
          return (
            <li
              key={index}
              className="list-ham cursor-pointer"
              onClick={() => {
                scrollToSection(option.toLowerCase());
              }}
              style={{
                borderBottom: isClicked === index ? "5px solid bg-p6" : "none",
              }}
            >
              {option}
            </li>
          );
        })}
        <div className="bg-primary rounded-md mt-5">
          <p className="py-4 text-center text-xl text-white font-semibold hover:scale-125 font-zilla">
            <Link to="./login">Apply</Link>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;

