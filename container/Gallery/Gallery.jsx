import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>We take pride in creating memorable experiences for our customers and these pictures showcase the ambiance, culinary delights, and joyful celebrations that we offer. </p>
        <Link href='/gallery'>
        <button type="button" className="custom__button">View More</button>
        </Link>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.bramble,images.gallery01, images.gallery02, images.choc, images.gallery03, images.cream,images.gallery04 ].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <Image src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))} 
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;