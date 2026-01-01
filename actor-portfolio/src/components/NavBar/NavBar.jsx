import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

import logo from "../../assets/logo.png"; 
import contact from "../../assets/contact.png"; 
import menu from "../../assets/menu.png"; 

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)
   
  return (
    <nav className="navbar">

      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />
      {/* Menu */}
      <div className="desktopMenu">
      <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-1} duration={500} className="desktopMenuListItem">About</Link>
      <Link activeClass="active" to="photos" spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">Photos</Link>
      <Link activeClass="active" to="videos" spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">Work Videos</Link>
     </div>

      {/* Contact Button */}
      <button className="desktopMenuBtn" onClick={()=> {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contact} alt="contactImg" className="desktopMenuImg" />
        Contact Me
      </button>

      
      {/* Logo */}
      <img src={menu} alt="logo" className="menu" onClick={()=> setShowMenu(!showMenu)}/>
      {/* Menu */}

      <div className="navMenu" style={{display: showMenu ? "flex":"none"}}>
      <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-70} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-1} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>About</Link>
      <Link activeClass="active" to="photos" spy={true} smooth={true} offset={-10} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Photos</Link>
      <Link activeClass="active" to="videos" spy={true} smooth={true} offset={-10} duration={500} className="ListItem" onClick={()=> setShowMenu(false)} >Work Videos</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-10} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Contact</Link>
     </div>


    </nav>
  );
};

export default NavBar;
