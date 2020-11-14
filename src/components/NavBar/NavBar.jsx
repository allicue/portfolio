import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className="navbar">
      <p className="nav">HOME</p>
      <p className="nav">ABOUT</p>
      <p className="nav">PORTFOLIO</p>
    </div>
  );
}

export default NavBar;