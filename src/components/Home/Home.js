import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillSunFill } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import Fade from "react-reveal/Fade";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="constainer-fluid home" id="Home">
      <div
        className={theme === "light" ? "btn-theme" : "btn-theme-dark"}
        onClick={changeTheme}
      >
        {theme === "light" ? (
          <p className="light-rotate">
            <BsFillSunFill size={25} />
          </p>
        ) : (
          <p>
            <GiNightSleep size={25} />
          </p>
        )}
      </div>
      <Fade right>
        <div className="home-container">
          <h1>I am Mohamad</h1>
          <h3>
            <Typewriter
              options={{
                strings: ["Web Developper", "UI/UX Designer", "Hacker!@!"],
                autoStart: true,
                loop: true,
                delay: "natural",
                cursor: "|",
              }}
            />
            <button className="Btn-1">Hire me</button>
            <button className="Btn-2">
              <a
                href="https://www.enrichgirlchild.org/resume-and-cover-letter-templates-for-free/"
                target="blank"
              >
                <p>Get resume</p>
              </a>
            </button>
          </h3>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
