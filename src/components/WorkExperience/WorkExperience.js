import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiChef } from "react-icons/si";

const data = [
  {
    companyName: "Google",
    position: "Full stack developer",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    year: "2017-2018",
    techskills: [
      {
        techskill: "javascript",
      },
      {
        techskill: "React.js",
      },
      {
        techskill: "Node.js",
      },
    ],
  },
  {
    companyName: "Twiter",
    position: "Full stack developer",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    year: "2017-2018",
    techskills: [
      {
        techskill: "javascript",
      },
      {
        techskill: "React.js",
      },
      {
        techskill: "Node.js",
      },
    ],
  },
  {
    companyName: "Linked in",
    position: "Full stack developer",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    year: "2017-2018",
    techskills: [
      {
        techskill: "javascript",
      },
      {
        techskill: "React.js",
      },
      {
        techskill: "Node.js",
      },
    ],
  },
  {
    companyName: "Youtube",
    position: "Full stack developer",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    year: "2017-2018",
    techskills: [
      {
        techskill: "javascript",
      },
      {
        techskill: "React.js",
      },
      {
        techskill: "Node.js",
      },
    ],
  },
  {
    companyName: "Instagram",
    position: "Full stack developer",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    year: "2017-2018",
    techskills: [
      {
        techskill: "javascript",
      },
      {
        techskill: "React.js",
      },
      {
        techskill: "Node.js",
      },
    ],
  },
  {
    companyName: "Facebook",
    position: "Full stack developer",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
    year: "2017-2018",
    techskills: [
      {
        techskill: "javascript",
      },
      {
        techskill: "React.js",
      },
      {
        techskill: "Node.js",
      },
    ],
  },
];

const colors = [
  "#A52A2A",
  "#A0522D",
  "#D2691E",
  "#CD853F",
  "#B8860B",
  "#F4A460",
];

const WorkExperience = () => {
  return (
    <div className="container mb-5" id="Work-Experience">
      <div className="tech-title mb-3">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
      <VerticalTimeline lineColor="bisque">
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index + 20}
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid bisque" }}
            date={item.year}
            dateClassName={"date-color"}
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<SiChef key={index} />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.companyName}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.position}
            </h4>
            <div className="row">
              {item.techskills.map((item, index) => (
                <div
                  className="tech-work col-xl-3 col-lg-3 col-md-3 col-sm-12"
                  style={{ color: colors[index], backgroundColor: "white" }}
                  key={index}
                >
                  {item.techskill}
                </div>
              ))}
            </div>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
