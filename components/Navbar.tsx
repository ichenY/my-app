import React from "react";
import NavbarItem from "./NavbarItem";
import { SocialIcon } from "react-social-icons";
import { IconContext } from "react-icons";
import { MdOutlineMailOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between">
      <div className="flex flex-row transition duration-500 px-4 py-6 md:px-16 bg-white bg-opactiy-60 relative">
        {/* <NavbarItem label="Home" /> */}
        {/* <NavbarItem label="Experience" /> */}
        {/* <NavbarItem label="Skill" /> */}
      </div>

      <div className="flex flex-row pt-2 px-4">
        <SocialIcon
          url="https://github.com/ichenY"
          fgColor="black"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/i-chen-yeh/"
          fgColor="black"
          bgColor="transparent"
        />
        <IconContext.Provider
          value={{ color: "black", size: "2.5em", style: { paddingTop: 13 } }}
        >
          <a href="mailto:t556.ux@gmail.com" target="_blank">
            <MdOutlineMailOutline></MdOutlineMailOutline>
          </a>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
