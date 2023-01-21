import React from "react";
import "./Contact.css";
import ContactPic from "../../image/images.jfif";
import { FiSend } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="container contact-section mb-5" id="Contact">
      <Fade top>
        <div className="row contact-item">
          <div className="img-contact col-lg-12 col-xl-5 col-md-12 col-sm-12">
            <img src={ContactPic} alt="any"></img>
          </div>
          <div className="contact-form col-lg-12 col-xl-7 col-md-12 col-sm-12 p-3">
            <div>
              <h4>Contact Form</h4>
              <p>Name</p>
              <input type="text"></input>
              <p>E-mail</p>
              <input type="text"></input>
              <p>Job Types</p>
              <select className="select">
                <option>full time</option>
                <option>part time</option>
                <option>natural time</option>
              </select>
              <p>Your Message</p>
              <textarea rows="4" className="message-contact"></textarea>
              <div>
                Send <FiSend style={{ color: "greenyellow" }} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
