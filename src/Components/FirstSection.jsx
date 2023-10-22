import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import dots from "../Assets/Images/dots.svg";

export default function FirstSection() {
  return (
    <div
      className="text-center bg-blue-400 w-full"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <img
        src={dots}
        alt="dots"
        style={{ position: "absolute" }}
        className="flex-start"
      /> */}
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
            The event is a gathering of regional and global ICT industry
            leaders, policymakers, executives, financiers, and innovators. It
            nurtures innovative ideas and partnerships that leverage technology
            to advance Kenya's development agenda.
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
  );
}
