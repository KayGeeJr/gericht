'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Special.css';

const Special = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="app__special app__bg">
      <div className="app__special-head">
        <SubHeading title="Menu That Fits Your Pallete" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__special-content">
        {data.specialMenu.map((item, index) => (
          <div
            className={`app__special-content_menu ${
              hoveredItem === index ? 'hovered' : ''
            }`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <p className="p__cormorant">{item.title}</p>
              <p className="p__opensans2">{item.ingredients}</p>
            </div>
            <div >
            {index !== data.specialMenu.length && (
                <Image
                  src={data.specialMenu[index].image}
                  alt="next-item"
                  className="next-item-image"
                />
              )}
                </div>
            <div className="price-container">
              <p className="p__cormorant2">R{item.price}</p>
            
            </div>
          </div>
        ))}
  
 
      </div>
      <div className='btn-div'>
        <Link href="/main-menu">
      <button className='custom__button'>View Menu</button>
      </Link>
      </div>
    </div>
  );
};

export default Special;
