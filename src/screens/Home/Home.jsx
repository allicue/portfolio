import React from 'react';
import "./Home.css";
import Arrow from '../../assets/arrow.png';
import NavBar from '../../components/NavBar/NavBar';
import WordCarousel from '../../components/WordAnimation/WordAnimation';

function Home(props) {
  return (
    <div className="homepage">
      <header id="header">
      <NavBar />
        <div className="homepage-title">
          <h1 id="homepage-title">ALLISON QUIROZ</h1>
          <h2 id="homepage-subtitle">JUNIOR SOFTWARE ENGINEER.</h2>
        </div>
        <div className="header-carousel-container">
          <WordCarousel />
        </div>
        <div className="explore-container">
          <h3>EXPLORE WORK</h3>
          <button className="explore-button"><img id="explore-arrow" alt="arrow" src={Arrow} /></button>
        </div>
      </header>
      <body>

      </body>
    </div>
  );
}

export default Home;