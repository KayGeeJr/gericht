import React from 'react';
import Image from 'next/image';
import { images } from '../../constants';
import sub from '../../assets/patten.svg'

import './SubHeading.css'
const Subheading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }} className="subheading">
      <p className="p__cormorant">{title}</p>
      <div className="spoon__container">
        <Image src={sub} alt="spoon_image" className="spoon__img" />
      </div>
    </div>
  );
  

export default Subheading