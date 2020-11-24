import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Portfolio.css';

function Portfolio(props) {

  const [listItems, setListItems] = useState("")
  const [fetchItems, setFetchItems] = useState(false);
  
  useEffect(() => {
    const getListItems = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/portfolio-projects`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setListItems(response.data.records);
      console.log(response.data.records)
    };
    getListItems();
  }, [fetchItems]);
  
  return (
    <div >
      <NavBar />
      <div className='portfolio'>
        <h1 className='portfolio-subtitle'>PORTFOLIO</h1>
        <h2 className="portfolio-text">Click on a project below for more project details.</h2>
      
        <div>
          {listItems &&
            <div className="thumbnail-container">
            {listItems.map((item) =>
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