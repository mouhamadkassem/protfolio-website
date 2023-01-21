import "./Projects.css";
import React from "react";
import ProjectsList from "./ProjectsList";
import LightSpeed from "react-reveal/LightSpeed";

const data = [
  {
    name: "MERN stack developper ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    projectLink: "https://en.wikipedia.org/wiki/Text_messaging",
    techUse: [
      { techName: "node.js" },
      { techName: "react.js" },
      { techName: "next.js" },
      { techName: "vue.js" },
    ],
  },
  {
    name: "MERN stack developper ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    projectLink: "https://en.wikipedia.org/wiki/Text_messaging",
    techUse: [
      { techName: "node.js" },
      { techName: "react.js" },
      { techName: "next.js" },
      { techName: "vue.js" },
    ],
  },
  {
    name: "MERN stack developper ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    projectLink: "https://en.wikipedia.org/wiki/Text_messaging",
    techUse: [
      { techName: "node.js" },
      { techName: "react.js" },
      { techName: "next.js" },
      { techName: "vue.js" },
    ],
  },
  {
    name: "MERN stack developper ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    projectLink: "https://en.wikipedia.org/wiki/Text_messaging",
    techUse: [
      { techName: "node.js" },
      { techName: "react.js" },
      { techName: "next.js" },
      { techName: "vue.js" },
    ],
  },
  {
    name: "MERN stack developper ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    projectLink: "https://en.wikipedia.org/wiki/Text_messaging",
    techUse: [
      { techName: "node.js" },
      { techName: "react.js" },
      { techName: "next.js" },
      { techName: "vue.js" },
    ],
  },
  {
    name: "MERN stack developper ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    projectLink: "https://en.wikipedia.org/wiki/Text_messaging",
    techUse: [
      { techName: "node.js" },
      { techName: "react.js" },
      { techName: "next.js" },
      { techName: "vue.js" },
    ],
  },
];

const Projects = () => {
  return (
    <div className="container mb-5 mt-5" id="Projects">
      <div className="tech-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <LightSpeed key={index}>
            <div className="col-xl6 col-lg-6 col-md-6 col-sm-12 list-item">
              <ProjectsList {...item} />
            </div>
          </LightSpeed>
        ))}
      </div>
    </div>
  );
};

export default Projects;
