'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Header.css';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  
  const { subHeading, heading, description, image } = data.headers[currentIndex];

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={subHeading} />
        <h1 className="app__header-h1">{heading}</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>{description}</p>
        <Link href="/main-menu">
        <button type="button" className="custom__button">Explore Menu</button>
        </Link>
      </div>

      <div className="app__wrapper_img">
        <Image src={image} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
