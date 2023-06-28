'use client'

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import Image from 'next/image';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <Link href="/">
        <Image src={images.gericht} alt="app__logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <Link href="/">
        <li className="p__opensans">Home</li>
        </Link>
        
        <Link href="/about">
        <li className="p__opensans">About Us</li>
        </Link>
        <Link href="/main-menu">
        <li className="p__opensans">Menu</li>
        </Link>
        <Link href="/gallery">
        <li className="p__opensans">Gallery</li>
        </Link>
        <Link href="/contact">
        <li className="p__opensans">Contact</li>
        </Link>
      </ul>
      <div className="app__navbar-login">
      <Link href="/booking">
        <button type='button' className='custom__button2 p__opensans'> Book Table</button>
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <Link href="/" onClick={() => setToggleMenu(false)}>
        <li className="p__opensans">Home</li>
        </Link>
        
        <Link href="/about" onClick={() => setToggleMenu(false)}>
        <li className="p__opensans">About Us</li>
        </Link>
        <Link href="/main-menu" onClick={() => setToggleMenu(false)}>
        <li className="p__opensans">Menu</li>
        </Link>
        <Link href="/gallery" onClick={() => setToggleMenu(false)}>
        <li className="p__opensans">Gallery</li>
        </Link>
        <Link href="/contact" onClick={() => setToggleMenu(false)} >
        <li className="p__opensans">Contact</li>
        </Link>
              
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;