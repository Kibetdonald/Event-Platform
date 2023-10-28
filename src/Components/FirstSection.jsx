import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import dots from "../Assets/Images/dots.svg";

export default function FirstSection() {
  return (
    <div className="relative text-center bg-blue-400 w-full" style={{ minHeight: "60vh" }}>
     
      <img
        src={dots}
        alt="dots"
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      /> 
      <img
        src={dots}
        alt="dots"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-180"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="col-md-6 col-sm-12">
          <Zoom top>
            <span className="text-white text-center">
              Dec, 12th | KICC | Nairobi, Kenya
            </span>
          </Zoom>
          <Fade top>
            <h2 className="bigtext">
              Regional Business Owners
              <br />
              Summit
            </h2>
          </Fade>
          <Fade top>
            <p className="smalltext">
              The event is a gathering of regional and global ICT industry leaders, policymakers, executives, financiers, and innovators. It nurtures innovative ideas and partnerships that leverage technology to advance Kenya's development agenda.
            </p>
          </Fade>
          <br />
          <Fade left>
            <a href="/signup" className="btn-letsgetstarted">
              Register
            </a>
            <br /> <br /> <br />
          </Fade>
        </div>
      </div>
    </div>
  );
}
