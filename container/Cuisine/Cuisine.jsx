'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Cuisine.css'

const Cuisine = () => {
  return (
    <div className='app__bg app__cuisine'>
        <div className='app__cuisine-heading'>
            <SubHeading title="Stylish Cuisine" />
            <h1 className='headtext__cormorant'>Experience The Fine Cuisine</h1>
        </div>
        <div className='app__cuisine-images'>
            <Image src={images.cuisine1} alt="rot1"/>
            <Image src={images.cuisine2} alt="rot2"/>
            <Image src={images.cuisine3} alt="rot3"/>
        </div>
        <Link href="/contact">
        <button type='button' className='custom__button'> Get Directions</button>
        </Link>
    </div>
  )
}

export default Cuisine