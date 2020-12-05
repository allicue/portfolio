import React from 'react';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github-white.png';
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer'>
      <p className='footer-text'>LET'S CONNECT:</p>
      <div className='footer-icon-container'>
      <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/allisonquiroz/'><img className='footer-icon' src={LinkedIn} /></a>
      <a rel="noreferrer" target="_blank" href='https://github.com/allicue/'><img className='footer-icon' src={Github}/></a>
      </div>

    </div>
  );
}

export default Footer;