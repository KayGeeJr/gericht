import React from 'react';
import Image from 'next/image';
import { SubHeading } from '@/components';
import { data } from '../../constants';
import Subheading from '../../components/SubHeading/SubHeading';

import './gallery.css';

const Gallery = () => {
  return (
    <div className='app__gallery'>
      <div className='app__galery-head'>
        <Subheading title='gallery' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
      </div>
      
      <div className='gallery__container'>
        {data.gallery.map((image, index) => (
          <div className='gallery__item' key={index}>
            <Image
              src={image.image}
              alt="image"
              width={600}
            
              objectFit='cover'
              className='image'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
