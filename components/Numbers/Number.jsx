'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { images } from '../../constants';

import './Numbers.css';

const Number = () => {
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
    <div className="app__numbers">
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
      <div className="app__number-wrap">
        <h1 className="headtext__cormorant">{yearsOfExperience}+</h1>
        <Image src={images.spoon} alt="spoon" />
        <p className="p__cormorant">Years Of Experience</p>
      </div>
    </div>
  );
};

export default Number;
