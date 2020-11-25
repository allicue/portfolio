import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import './Portfolio.css';


function Portfolio(props) {

  return (
    <div >
      <NavBar />



      <div className='portfolio'>

        <div className='portfolio-text-container'>
        <h1 className='portfolio-subtitle'>PORTFOLIO</h1>
        <h2 className="portfolio-text">Click on a project below for more project details.</h2>
        </div>

        <div>
          {props.listItems &&
            <div className="thumbnail-container">
            {props.listItems.map((item) =>
              <Link className='portfolio-link' to={`/portfolio/${item.fields.name}`}>
                <div className='thumbnail-images' style={{ backgroundImage: `url(${item.fields.thumbnail})` }}>
                  <div className='thumbnail-text-container'>
                    <p className='thumbnail-text'>{item.fields.name}</p>
                  </div>
                </div>
              </Link>   
              )}
            </div>
          }
        </div>
      
      </div>


    </div>
  );
}

export default Portfolio;