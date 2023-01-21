import "./TechStack.css";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const data = [
  { name: "Node.js" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Vue.js" },
  { name: "Angular.js" },
  { name: "Express.js" },
  { name: "Vanilia.js" },
  { name: "Javascript" },
  { name: "MangoDb" },
  { name: "css" },
  { name: "html" },
  { name: "React Native" },
];

const colors = [
  "#A52A2A",
  "#A0522D",
  "#8B4513",
  "#D2691E",
  "#CD853F",
  "#B8860B",
  "#DAA520",
  "#BC8F8F",
  "#F4A460",
  "#FFE4C4",
  "#FFDEAD",
  "#F5DEB3",
];

const TechStack = () => {
  const [showMore, setShowMore] = useState(6);

  const loadMore = () => {
    setShowMore(showMore + 2);
  };

  const loadLess = () => {
    setShowMore(6);
  };
  return (
    <div className="container" id="Tech-Stack">
      <div className="tech-section">
        <div className="tech-title">
          <h5>TechStack</h5>
          <span className="line"></span>
        </div>
        <div className="row">
          {data.slice(0, showMore).map((tech, index) => (
            <Fade right key={index + 50}>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div
                  className={
                    index === 0
                      ? "text-content-other text-content"
                      : "text-content"
                  }
                >
                  <span
                    className="tech-number"
                    style={{ backgroundColor: colors[index] }}
                  >
                    {index + 1}
                  </span>
                  <p>{tech.name}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {showMore >= data.length ? (
          <span className="btn-show-less" onClick={loadLess}>
            Show less
          </span>
        ) : (
          <span className="btn-show-more" onClick={loadMore}>
            Show More
          </span>
        )}
      </div>
    </div>
  );
};

export default TechStack;
