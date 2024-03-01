import './AboutMyself.css';

import React, { useState } from 'react';

import ContactBtn from '../../contact-btn/ContactBtn';

import Memoji1 from '../../../images/memoji/1.png';
import Memoji2 from '../../../images/memoji/2.png';
import Memoji3 from '../../../images/memoji/3.png';
import Memoji4 from '../../../images/memoji/4.png';
import Memoji5 from '../../../images/memoji/5.png';
import Memoji6 from '../../../images/memoji/6.png';
import Memoji7 from '../../../images/memoji/7.png';
import Memoji8 from '../../../images/memoji/8.png';

const startMemojies = [
  Memoji1,
  Memoji2,
  Memoji3,
  Memoji4,
  Memoji5,
  Memoji6,
  Memoji7,
  Memoji8,
];

const memojies = startMemojies.sort((a, b) => 0.5 - Math.random());

const AboutMyself = () => {
  const [memojiIndex, setMemojiIndex] = useState(0);

  const incrementMemojiIndex = () => {
    if (memojiIndex + 1 >= memojies.length) setMemojiIndex(0);
    else setMemojiIndex(memojiIndex + 1);
  };

  return (
    <div className='about-myself grid-cell'>
      <div className='memojies-container' onClick={incrementMemojiIndex}>
        {memojies.map((memoji, index) => {
          return (
            <img
              key={index}
              src={memoji}
              alt=''
              className={`memoji ${memojiIndex === index ? 'active' : ''}`}
            />
          );
        })}
      </div>

      <p className='greeting'>Hello! My name is</p>
      <p className='my-name'>Ivan Buianov</p>
      <p className='description'>
        I am a 17-year-old Frontend Developer. I spend all my free time coding
        and creating stuff. Currently, I live in the US, but I have moved a lot
        due to safety reasons, so I've lived in Ukraine, Russia, and Germany
        before. I enjoy building stylish websites and learning new skills.
      </p>
      <ContactBtn />
    </div>
  );
};

export default AboutMyself;
