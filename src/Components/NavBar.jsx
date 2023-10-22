import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "../Assets/Styles/navbar.scss";
import "../Assets/Styles/responsive.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import logo from "../Assets/Images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="Navbar fixed bg-blue-400 top-0 left-0 right-0">
       <a href="/"> <img src={logo} className="w-20 h-20"/> </a>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavHashLink to="/#about">About </NavHashLink>
          <NavHashLink to="/#features">Speakers</NavHashLink>
          <NavHashLink to="/#works"> Gallery </NavHashLink>
          <a href="/essaysamples">Event Schedule</a>
          <NavHashLink to="/#faq">FAQ </NavHashLink>
          <NavHashLink to="/#contact">Contact Us </NavHashLink> 

          <a href="/register" className="register">
            Register
          </a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
