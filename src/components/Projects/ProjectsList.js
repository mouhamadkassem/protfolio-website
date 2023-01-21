import React, { useState } from "react";
import "./Projects.css";
import { FcCollapse, FcExpand } from "react-icons/fc";

const ProjectsList = ({ name, des, projectLink, techUse }) => {
  const [boolean, setBoolean] = useState(false);

  const moreInfo = () => {
    setBoolean(!boolean);
  };

  return (
    <div
      className="porject-list pb-2"
      onClick={moreInfo}
      onMouseEnter={() => setBoolean(true)}
      onMouseLeave={() => setBoolean(false)}
    >
      <div className="project-title-icon d-flex justify-content-between p-2 mt-5">
        <h5>{name}</h5>
        {boolean ? <FcCollapse size={20} /> : <FcExpand size={20} />}
      </div>
      <div className="row p-2 me-1">
        {techUse.map((tech, index) => (
          <div
            className="tech-item col-xl-3 col-lg-4 col-md-6 col-sm-12 ms-2 mt-2"
            key={index}
          >
            {tech.techName}
          </div>
        ))}
      </div>
      <div className="link-proj mt-3 ms-2">
        <a href={projectLink} target="blind">
          Live Demo
        </a>
      </div>
      <div className="des-proj mt-4 ps-2">
        {
          boolean ? (
            <p className="p-des">{des}</p>
          ) : (
            <p>more info...</p>
          ) /*or put null */
        }
      </div>
    </div>
  );
};

export default ProjectsList;
