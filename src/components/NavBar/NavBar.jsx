import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(props) {
  return (
    <div className="navbar">
      <Link className="nav" to="/"><p>HOME</p></Link>
      <Link className="nav" to="/portfolio"><p>PORTFOLIO</p></Link>
      <Link className="nav" to="/about-me"><p>ABOUT</p></Link>
    </div>
  );
}

export default NavBar;