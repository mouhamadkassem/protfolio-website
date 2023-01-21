import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineCastForEducation } from "react-icons/md";

const data = [
  {
    nameEducation: "Lession 1",
    type: "M.sc in Software Engineering",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    nameEducation: "Lession 2",
    type: "B.sc in Software Engineering",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    nameEducation: "Lession 3",
    type: "College Graduation",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    nameEducation: "Master 1",
    type: "hello world in Software Engineering",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
];

const colors = ["#F4A460", "#EFE7C4", "#FFDEAD", "#F5DEA2"];

const Education = () => {
  return (
    <div className="container mb-5" id="Education">
      <div className="tech-title mb-3">
        <h5>Education</h5>
        <span className="line"></span>
      </div>
      <VerticalTimeline lineColor="bisque">
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid bisque" }}
            date={item.year}
            dateClassName={"date-color"}
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<MdOutlineCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.nameEducation}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">{item.type}</h5>
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
