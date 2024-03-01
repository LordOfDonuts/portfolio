import './Instagram.css';

import React from 'react';

import { FaInstagram } from 'react-icons/fa';

const Instagram = () => {
  return (
    <a
      href='https://www.instagram.com/director_of_potatoes/'
      target='_blank'
      rel='noreferrer'
      className='instagram grid-cell'
    >
      <FaInstagram className='instagram-icon' />
    </a>
  );
};

export default Instagram;
