'use client'

import React from 'react'
import {Header, AboutUs, Menus, SpecialMenu, Chef, Cuisine, Laurels, Blog, Gallery, FindUs, Footer } from '../container';
import Special from '../container/Special/Special'
import { Booking, Number } from '../components';


const page = () => {
  return (
    <div>
    <Header/>
    <AboutUs/>

  
    <Special/>
    <SpecialMenu/>
    <Chef/>
    <Cuisine/>
    <Laurels/>
    <Blog/>
    <Gallery/>
    <Number/>
    <FindUs/>
   
    </div>
  )
}

export default page