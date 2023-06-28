'use client'

import React, { useState } from 'react';
import mains from '../../assets/mains.jpg';
import cocktails from '../../assets/cocktails.jpg';
import dessert from '../../assets/dessert.jpg'
import starter from '../../assets/starter.png';


import './Menus.css';

const Menus = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setBackgroundImage('');
  };

  return (
    <div className="menu__bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="menu__wrapper">
        <div
          className="section"
          id="main-course"
          onMouseEnter={() => handleMouseEnter(mains)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section__wrapper">
            <h1 className="headtext__cormorant2">Main Course</h1>
            <p className="p__cormorant">Delicious and hearty dishes prepared with the finest ingredients.</p>
            <p className="p__cormorant2">Read More</p>
          </div>
        </div>

        <div
          className="section"
          id="cocktail-menu"
          onMouseEnter={() => handleMouseEnter(cocktails)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section__wrapper">
            <h1 className="headtext__cormorant2">Cocktail Menu</h1>
            <p className="p__cormorant">Sip on our handcrafted cocktails expertly mixed with premium spirits.</p>
            <p className="p__cormorant2">Read More</p>
          </div>
        </div>

        <div
          className="section"
          id="best-dessert"
          onMouseEnter={() => handleMouseEnter(dessert)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section__wrapper">
            <h1 className="headtext__cormorant2">Best Dessert</h1>
            <p className="p__cormorant">Indulge in our delectable desserts that will satisfy your sweet cravings.</p>
            <p className="p__cormorant2">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
