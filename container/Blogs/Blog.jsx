'use client'

import React from 'react';
import { data } from '../../constants';
import Image from 'next/image';
import { SubHeading } from '../../components';
import './Blog.css';

const Blog = () => {
  return (
    <div className="app__blog">
        <div>
            <SubHeading title='Blogs' />
            <h1 className='headtext__cormorant'>Gericht Updates</h1>
        </div>
        <div className='app__blog-card '>
      {data.blogs.map((item) => (
        <div className="app__blog-post" key={item.title}>
          <Image className="app__blog-image" src={item.image} alt={item.blogger} />
          <div className="app__blog-details">
            <div className="app__blog-top">
              <p className="p__opensans">{item.date}</p>
              <p className="p__opensans">{item.blogger}</p>
            </div>
            <div className="app__blog-content">
              <h1 className="p__cormorant">{item.title}</h1>
              <p className="p__opensans">{item.description}</p>
              
            </div>
       
          </div>
        </div>

      ))}
      </div>
    </div>
  );
};

export default Blog;
