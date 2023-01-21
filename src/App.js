import React, { useState, createContext, useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import SidebarMobile from "./components/Sidebar/SidebarMobile";
//import { SiBlackberry } from "react-icons/si";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <SidebarMobile theme={theme} changeTheme={changeTheme} />
        <Sidebar theme={theme} changeTheme={changeTheme} />
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
      <ScrollToTop
        smooth="true"
        top="20" // 20 is the default
        color="white"
        width="20"
        height="20"
        style={{ backgroundColor: "black", borderRadius: "90px" }}
      />
    </ThemeContext.Provider>
  );
}

export default App;
