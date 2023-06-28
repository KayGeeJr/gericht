'use client'

import React from 'react';
import Image from 'next/image';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper app__chef section__padding">
   
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
      
        <p className="p__opensans">
          We believe in using the freshest ingredients and innovative techniques to craft memorable culinary experiences.
          Our passion for food drives us to create dishes that bring people together and leave a lasting impression.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <Image src={images.sign} alt="sign_image" />
      </div>
      
    </div>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Image src={images.chef} alt="chef_image" />
    </div>
  </div>
);

export default Chef;
