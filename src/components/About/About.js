import "./About.css";
import ProfilePic from "../../image/th.jfif";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div
      id="About"
      className="container about-section mt-5 mb-5 row d-flex align-items-center justify-content-center"
    >
      <Fade left>
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div>
            <div className="d-flex justify-content-center">
              <img src={ProfilePic} alt="any"></img>
            </div>
          </div>
        </div>
      </Fade>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <Fade right>
          <div className="about-me">
            <div className="about-title">
              <h5>About me</h5>
              <span className="line"></span>
            </div>

            <p>
              Text messaging, or texting, is the act of composing and sending
              electronic messages, typically consisting of alphabetic and
              numeric characters
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
