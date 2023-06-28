'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <Image src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
    <div className="app__aboutus-content_about">
  <h1 className="headtext__cormorant">About Us</h1>
  <Image src={images.spoon} alt="about_spoon" className="spoon__img2" />
  <p className="p__opensans">At our restaurant, we are passionate about creating unforgettable dining experiences. From the moment you step through our doors, expect nothing but excellence in taste, service, and ambiance. Join us and embark on a journey of gastronomic delight.</p>
  <Link href='/about'>
  <button type="button" className="custom__button">Know More</button>
  </Link>
</div>

      <div className="app__aboutus-content_knife flex__center">
        <Image src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
  <h1 className="headtext__cormorant">Our History</h1>
  <Image src={images.spoon} alt="about_spoon" className="spoon__img2" />
  <p className="p__opensans">Established with a vision to redefine dining experiences, we have consistently pushed boundaries and delighted taste buds. Our commitment to quality, innovation, and impeccable service has earned us a special place in the hearts of our patrons.</p>
  <Link href='/about'>
  <button type="button" className="custom__button">Know More</button>
  </Link>
</div>

    </div>
  </div>
);

export default AboutUs;