import React from 'react'
import Image from 'next/image'
import { SubHeading } from '@/components';
import {images} from '../../constants';

import './contact.css'
const Contact = () => {
  return (
    <div className="app__bg app__wrapper app__laurels section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Let Us Know Your Thoughts</h1>
      <p className='p__opensans2'>We are always here to assist you in any way we can. Don’t hesitate to reach out to us via phone or email for any inquiries you may have</p>
      <div className="app__laurels_awards">
        <div>

          <p className='p__cormorant2'>Visit us at our place</p>
          <p className='p__opensans'> Gericht Restaurant<br/> 456 Mopani Crossing<br/>
           Nelspruit <br/>
           1300</p>

                 <p className='p__cormorant2'>Questions? Email/Call us at</p>
          <p className='p__opensans'>gericht@supportemail.com <br/> 0137122509
        </p>
        </div>
        
        
       
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image src={images.laurels} alt="laurels_img" />
    </div>
  </div>
  )
}

export default Contact