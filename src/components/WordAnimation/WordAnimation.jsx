import React from 'react';
import './WordAnimation.css';

function WordAnimation(props) {
  return (
    <div>
          <h4 className="wordCarousel">    
          <span>A LITTLE ABOUT ME:</span>  
          <div className="animation-div"> 
              <ul className="flip4"> 
                  <li>WEB DEVELOPER</li>
                  <li>TRAVEL ENTHUSIAST</li>
                  <li>KARAOKE LOVER</li> 
                  <li>NEW YORKER</li>  
              </ul>
          </div>  
        </h4>
    </div>
  );
}

export default WordAnimation;