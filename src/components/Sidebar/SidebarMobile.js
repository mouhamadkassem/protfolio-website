import React, { useState } from "react";
import "./SidebarMobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Switch from "react-switch";
import {
  FcHome,
  FcNightPortrait,
  FcFactoryBreakdown,
  FcSteam,
  FcDiploma2,
  FcTodoList,
  FcSalesPerformance,
  FcNews,
} from "react-icons/fc";

const SidebarMobile = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="container-fluid nav-M">
      <div className="mobile-nav">
        <div className="mobile-sidebardiv">
          <p>
            <GiHamburgerMenu size={25} onClick={handleOpen} />
          </p>
        </div>
      </div>
      {open ? (
        <div className="mobile-navb">
          <ul>
            <li className="mobile-sidebar">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={20} />
                Home
              </Link>
            </li>
            <li className="mobile-sidebar">
              <Link
                to="About"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={20} />
                About
              </Link>
            </li>
            <li className="mobile-sidebar">
              <Link
                to="Work-Experience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                {" "}
                <FcFactoryBreakdown size={20} />
                Work Experience
              </Link>
            </li>{" "}
            <li className="mobile-sidebar">
              <Link
                to="Tech-Stack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                {" "}
                <FcSteam size={20} />
                Tech Stack
              </Link>
            </li>{" "}
            <li className="mobile-sidebar">
              <Link
                to="Education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcDiploma2 size={20} />
                Education
              </Link>
            </li>{" "}
            {/* <Link
              to="Projects"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            ></Link> */}
            <li className="mobile-sidebar">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                {" "}
                <FcTodoList size={20} />
                Projects
              </Link>
            </li>
            <li className="mobile-sidebar">
              <Link
                to="Testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={20} />
                Testimonial
              </Link>
            </li>
            <li className="mobile-sidebar">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNews size={20} />
                Contact
              </Link>
            </li>
            <li className="mobile-sidebar switch">
              <Switch
                checked={theme === "light" ? false : true}
                onChange={changeTheme}
              />{" "}
              {theme === "light" ? <p>night mode</p> : <p>dark mode</p>}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SidebarMobile;
