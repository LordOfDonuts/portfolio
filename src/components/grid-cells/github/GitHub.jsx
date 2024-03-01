import './GitHub.css';

import React from 'react';

import { FaGithub } from 'react-icons/fa';

const GitHub = () => {
  return (
    <a
      href='https://github.com/LordOfDonuts'
      target='_blank'
      rel='noreferrer'
      className='github grid-cell'
    >
      <FaGithub className='github-icon' />
    </a>
  );
};

export default GitHub;
