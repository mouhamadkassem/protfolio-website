import React, { useState } from "react";
import "./Sidebar.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList";
import Home from "../Home/Home";

const Sidebar = ({ theme, changeTheme }) => {
  const [expandSidebar, setExpandSidbar] = useState(true);

  const handeleExpandSidebar = () => {
    setExpandSidbar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand" : "sidebar"}>
        <div className="first-icon-sidebar">
          <p onClick={handeleExpandSidebar}>
            {expandSidebar ? (
              <BsChevronRight size={25} />
            ) : (
              <BsChevronLeft size={25} />
            )}
          </p>
        </div>
        <div>
          <SidebarList expandSidebar={!expandSidebar} />
        </div>
      </div>
      <div className="container">
        <Home theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Sidebar;
