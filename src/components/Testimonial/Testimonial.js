import React from "react";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProfilePic from "../../image/th.jfif";
import Zoom from "react-reveal/Zoom";

const data = [
  {
    name: "Elizebth",
    position: "UI/UX Designer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rd.com%2Flist%2Fonline-dating-profile-photos%2F&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAD",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "Engineer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAJ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "CEO",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stockvault.net%2Ffree-photos%2Fprofile&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAN",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "software engineering",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fexpertphotography.b-cdn.net%2Fwp-content%2Fuploads%2F2020%2F08%2Fprofile-photos-4.jpg&imgrefurl=https%3A%2F%2Fexpertphotography.com%2Fcool-profile-pictures%2F&tbnid=V0vATOu1b2AS0M&vet=12ahUKEwiphdSZn6H7AhWWgc4BHarkD9kQMygNegUIARDdAQ..i&docid=IFzJeadVXkgROM&w=700&h=467&q=image%20profile&ved=2ahUKEwiphdSZn6H7AhWWgc4BHarkD9kQMygNegUIARDdAQ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "UI/UX Designer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rd.com%2Flist%2Fonline-dating-profile-photos%2F&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAD",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "Engineer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAJ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "CEO",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stockvault.net%2Ffree-photos%2Fprofile&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAN",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "software engineering",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fexpertphotography.b-cdn.net%2Fwp-content%2Fuploads%2F2020%2F08%2Fprofile-photos-4.jpg&imgrefurl=https%3A%2F%2Fexpertphotography.com%2Fcool-profile-pictures%2F&tbnid=V0vATOu1b2AS0M&vet=12ahUKEwiphdSZn6H7AhWWgc4BHarkD9kQMygNegUIARDdAQ..i&docid=IFzJeadVXkgROM&w=700&h=467&q=image%20profile&ved=2ahUKEwiphdSZn6H7AhWWgc4BHarkD9kQMygNegUIARDdAQ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "UI/UX Designer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rd.com%2Flist%2Fonline-dating-profile-photos%2F&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAD",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "Engineer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAJ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "CEO",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stockvault.net%2Ffree-photos%2Fprofile&psig=AOvVaw2124nVFXejGyrUd13NS0en&ust=1668088274379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbwayfofsCFQAAAAAdAAAAABAN",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
  {
    name: "Elizebth",
    position: "software engineering",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fexpertphotography.b-cdn.net%2Fwp-content%2Fuploads%2F2020%2F08%2Fprofile-photos-4.jpg&imgrefurl=https%3A%2F%2Fexpertphotography.com%2Fcool-profile-pictures%2F&tbnid=V0vATOu1b2AS0M&vet=12ahUKEwiphdSZn6H7AhWWgc4BHarkD9kQMygNegUIARDdAQ..i&docid=IFzJeadVXkgROM&w=700&h=467&q=image%20profile&ved=2ahUKEwiphdSZn6H7AhWWgc4BHarkD9kQMygNegUIARDdAQ",
    des: "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters",
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  rows: 1, // default 1
  autoplay: true, // default is false
  autoplaySpeed: 2000, // default 3000
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="container testimonial-section" id="Testimonial">
      <div className="tech-title mb-5">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => (
          <Zoom bottom key={index}>
            <div className="mt-3">
              <div className="parent-slider">
                <img
                  src={ProfilePic}
                  alt="any"
                  className="img-testimonial"
                ></img>
                <p>{item.des}</p>
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </div>
          </Zoom>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
