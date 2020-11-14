import React from 'react';
import './WordAnimation.css';

function WordAnimation(props) {
  return (
    <div>
          <h4 className="wordCarousel">    
          <span>Word swipe animation: </span>  
          <div className="animation-div"> 
              <ul className="flip4"> 
                  <li>Oh My!</li>
                  <li>Swoosh</li>
                  <li>Cool</li> 
                  <li>Awesome</li>  
              </ul>
          </div>  
        </h4>
    </div>
  );
}

export default WordAnimation;