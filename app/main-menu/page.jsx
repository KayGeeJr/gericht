'use client'
import React from 'react'
import Image from 'next/image';
import breakie from '../../assets/breakie.avif';
import starter from '../../assets/starterMenu.avif';
import main from '../../assets/mains.jpg';
import dessrt from '../../assets/Desert.avif';
import g6 from '../../assets/gallery/g6.jpeg'
import g9 from '../../assets/gallery/g9.jpeg'
import g16 from '../../assets/gallery/g16.jpeg'
import g8 from '../../assets/gallery/g8.jpeg'
import Subheading  from '../../components/SubHeading/SubHeading';
import { data } from '@/constants';

import './main-menu.css'

const MainMenu = () => {
  return (
    <div className='app__menu'>
      <div className='app__menu-menus'>
        <Image src={breakie} alt="breakfast" className='menu-image'/>
    
      <div className='app__menu-menus-content'>
        <Subheading title="Our Menu"/>
        <h1 className='headtext__cormorant'> Breakfast Menu</h1>
        <div className='menu-items'>
        {data.breakfasts.map((item) =>(
          <div className='menu-items-data'>
            <div>
              <p className='p__cormorant3'>{item.title}</p>
              <p className='p__opensans3'>{item.ingredients}</p>
            </div>
            <p className="p__cormorant2">R{item.price}</p>
          </div>
        ))}
        </div>
        </div>

    </div>

     <div className='app__menu-menus'>
        
      <div className='app__menu-menus-content'>
        <Subheading title="Our Menu"/>
        <h1 className='headtext__cormorant'> Starter Menu</h1>
        <div className='menu-items'>
        {data.starters.map((item) =>(
          <div className='menu-items-data'>
            <div>
              <p className='p__cormorant3'>{item.title}</p>
              <p className='p__opensans3'>{item.ingredients}</p>
            </div>
            <p className="p__cormorant2">R{item.price}</p>
          </div>
        ))}
        </div>
      </div>
      <Image src={starter} alt="breakfast" className='menu-image'/>
    
    </div>

    <div className='app__menu-menus'>
        <Image src={g9} alt="breakfast" className='menu-image'/>
    
      <div className='app__menu-menus-content'>
        <Subheading title="Our Menu"/>
        <h1 className='headtext__cormorant'> Main Course Menu</h1>
        <div className='menu-items'>
        {data.mains.map((item) =>(
          <div className='menu-items-data'>
            <div className='data'>
              <p className='p__cormorant3'>{item.title}</p>
              <p className='p__opensans3'>{item.ingredients}</p>
            </div>
            <p className="p__cormorant2">R{item.price}</p>
          </div>
        ))}
        </div>
      </div>

    </div>

     <div className='app__menu-menus'>
        
      <div className='app__menu-menus-content'>
        <Subheading title="Our Menu"/>
        <h1 className='headtext__cormorant'> Dessert Menu</h1>
        <div className='menu-items'>
        {data.desserts.map((item) =>(
          <div className='menu-items-data'>
            <div>
              <p className='p__cormorant3'>{item.title}</p>
              <p className='p__opensans3'>{item.ingredients}</p>
            </div>
            <p className="p__cormorant2">R{item.price}</p>
          </div>
        ))}
        </div>
      </div>
      <Image src={dessrt} alt="breakfast" className='menu-image'/>
    
    </div>

    

  
    </div>
  )
}

export default MainMenu