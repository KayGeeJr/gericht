'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { images } from '@/constants';
import { SubHeading, Number } from '@/components'


import about1 from '../../assets/about1.jpeg'
import about2 from '../../assets/about2.jpeg'
import about11 from '../../assets/about11.jpeg'
import about22 from '../../assets/about22.jpeg'
import about33 from '../../assets/about33.jpeg'
import './about.css'
const About = () => {

  const [breakfastOptions, setBreakfastOptions] = useState(0);
  const [dinnerOptions, setDinnerOptions] = useState(0);
  const [tablesAvailable, setTablesAvailable] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  const animateNumber = (endValue, setValue, duration) => {
    let startValue = 0;
    const increment = Math.ceil(endValue / (duration / 30)); // Increment the number every 30ms

    const timer = setInterval(() => {
      startValue += increment;
      setValue(startValue);

      if (startValue >= endValue) {
        clearInterval(timer);
        setValue(endValue);
      }
    }, 30);
  };

  useEffect(() => {
    animateNumber(30, setBreakfastOptions, 9000); // Animate from 0 to 30 over 2 seconds
    animateNumber(50, setDinnerOptions, 9000); // Animate from 0 to 50 over 2 seconds
    animateNumber(52, setTablesAvailable, 9000); // Animate from 0 to 52 over 2 seconds
    animateNumber(20, setYearsOfExperience, 9000); // Animate from 0 to 20 over 2 seconds
  }, []);
  return (
    <div className='app__about'>
      <div className='app__about-head'>
        <SubHeading title='About Us'/>
        <h1 className='headtext__cormorant'>Serving Customers For Over A Decade</h1>
      </div>
      <div className='about-sections'>
        <div>
          <Image src={about1} alt="ab" />
        </div>
        <div>
          <Image src={about2} alt="ab" />
         
          <div className='numbers'>


          <div className="app__number-wrap">
        <h1 className="headtext__cormorant">{breakfastOptions}+</h1>
        <Image src={images.spoon} alt="spoon" />
        <p className="p__cormorant">Breakfast Options</p>
      </div>
      <div className="app__number-wrap">
        <h1 className="headtext__cormorant">{dinnerOptions}</h1>
        <Image src={images.spoon} alt="spoon" />
        <p className="p__cormorant">Dinner Options</p>
      </div>
      <div className="app__number-wrap">
        <h1 className="headtext__cormorant">{tablesAvailable}+</h1>
        <Image src={images.spoon} alt="spoon" />
        <p className="p__cormorant">Tables Available</p>
      </div>
        </div>
      </div>
      </div>

      <div className='text'>
        <p className='p__opensans2'>
        Indulge in a symphony of flavors meticulously crafted by our talented team of chefs. Each dish is a masterpiece, showcasing the finest ingredients and innovative culinary techniques. 

Immerse yourself in an atmosphere of elegance and sophistication, where every detail is thoughtfully curated to enhance your dining pleasure. From the soft ambient lighting to the soothing music playing in the background, we have created the perfect setting for an unforgettable evening.

Our knowledgeable and attentive staff are here to guide you through our menu, offering expert recommendations and ensuring that every aspect of your dining experience surpasses your expectations. 

We take pride in our extensive wine collection, carefully selected to complement and elevate the flavors of our dishes. Let our sommelier assist you in finding the perfect pairing, adding an extra layer of refinement to your meal.

Whether you are celebrating a special occasion, enjoying a romantic dinner for two, or simply seeking a culinary adventure, we are committed to making your time with us truly exceptional. We strive to create memories that will linger long after your last bite.

Come and join us at our restaurant, where passion and creativity converge to create a gastronomic journey like no other. Book your table today and let us transport you to a world of delectable delights and unparalleled dining experiences.
        </p>
      </div>



      <div className='app__about-heads'>
        <SubHeading title='Our History'/>
        <h1 className='headtext__cormorant'>Serving Customers For Over A Decade</h1>
      </div>
      <div className='about-sections'>
       
          <Image src={about11} alt="ab" width={400}/>

    
          <Image src={about33} alt="ab" width={400}/>
          <Image src={about22} alt="ab" width={400} />
           
      
      </div>

      <div className='text'>
        <p className='p__opensans2'>
        Since our inception, our restaurant has been a beacon of culinary excellence. Our journey began several years ago when our founder, a passionate chef with a bold vision, set out to create a dining establishment unlike any other.

With a deep-rooted love for food and a relentless pursuit of perfection, our founder assembled a team of talented individuals who shared the same passion and dedication. Together, they embarked on a mission to redefine the dining experience and leave a lasting impression on every guest who walked through our doors.

From the very beginning, our commitment to quality has been unwavering. We source only the freshest and finest ingredients, working closely with local farmers and suppliers to ensure that every dish is a testament to the flavors of the season. Our chefs constantly push the boundaries of culinary innovation, infusing traditional recipes with modern techniques and unexpected twists.

Word quickly spread about our exceptional cuisine and impeccable service, drawing patrons from near and far. Our restaurant became a gathering place for food enthusiasts, discerning diners, and those seeking a memorable dining experience. We have had the honor of hosting countless celebrations, intimate dinners, and important milestones in the lives of our cherished guests.

Over the years, we have garnered critical acclaim and prestigious awards, solidifying our position as a culinary destination of choice. However, our true measure of success lies in the smiles on our patrons' faces and the joy we bring to their palates.

As we look to the future, we remain committed to pushing boundaries, exploring new flavors, and continuously raising the bar. Our passion for creating unforgettable dining experiences burns brighter than ever, and we invite you to join us on this extraordinary journey of gastronomic delight.
        </p>
      </div>
    </div>
  )
}

export default About