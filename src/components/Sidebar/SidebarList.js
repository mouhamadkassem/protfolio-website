import React from "react";
import "./SidebarList.css";
import ProfilePic from "../../image/th.jfif";
import { Link } from "react-scroll";
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

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={ProfilePic} alt="Profile picture"></img>
          </div>
          <ul>
            <li className="sidebar-items">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcHome size={20} />
                Home
              </Link>
            </li>
            <li className="sidebar-items">
              <Link
                to="About"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcNightPortrait size={20} />
                About
              </Link>
            </li>
            <li className="sidebar-items">
              <Link
                to="Work-Experience"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {" "}
                <FcFactoryBreakdown size={20} />
                Work Experience
              </Link>
            </li>{" "}
            <li className="sidebar-items">
              <Link
                to="Tech-Stack"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {" "}
                <FcSteam size={20} />
                Tech Stack
              </Link>
            </li>{" "}
            <li className="sidebar-items">
              <Link
                to="Education"
                spy={true}
                smooth={true}
                duration={500}
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
              duration={500}
              offset={-100}
            ></Link> */}
            <li className="sidebar-items">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {" "}
                <FcTodoList size={20} />
                Projects
              </Link>
            </li>
            <li className="sidebar-items">
              <Link
                to="Testimonial"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcSalesPerformance size={20} />
                Testimonial
              </Link>
            </li>
            <li className="sidebar-items">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcNews size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-close">
          <ul>
            <li>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcNightPortrait size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="Work-Experience"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {" "}
                <FcFactoryBreakdown size={25} />
              </Link>
            </li>{" "}
            <li>
              <Link
                to="Tech-Stack"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {" "}
                <FcSteam size={25} />
              </Link>
            </li>{" "}
            <li>
              <Link
                to="Education"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcDiploma2 size={25} />
              </Link>
            </li>{" "}
            {/* <Link
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            ></Link> */}
            <li>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {" "}
                <FcTodoList size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="Testimonial"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcNews size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
