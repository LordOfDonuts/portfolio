import './AboutMyself.css';
import ContactButton from '../contact-button/ContactButton';

import Emoji1 from '../../images/Emoji1.png';
import Emoji2 from '../../images/Emoji2.png';
import Emoji3 from '../../images/Emoji3.png';
import Emoji4 from '../../images/Emoji4.png';

import React, { useState } from 'react';

const AboutMyself = () => {
  const [activeEmoji, setActiveEmoji] = useState(0);

  const changeActiveEmoji = () => {
    if (activeEmoji + 1 > 3) setActiveEmoji(0);
    else setActiveEmoji(activeEmoji + 1);
  };

  return (
    <div className='grid-section about-myself'>
      <header>
        <ul className='emojis' onClick={changeActiveEmoji}>
          <li className={`${activeEmoji === 0 ? 'active' : ''}`}>
            <img src={Emoji4} alt='' />
          </li>
          <li className={`${activeEmoji === 1 ? 'active' : ''}`}>
            <img src={Emoji2} alt='' />
          </li>
          <li className={`${activeEmoji === 2 ? 'active' : ''}`}>
            <img src={Emoji1} alt='' />
          </li>
          <li className={`${activeEmoji === 3 ? 'active' : ''}`}>
            <img src={Emoji3} alt='' />
          </li>
        </ul>
        <p className='my-name-is'>Hello! My name is</p>
        <h1 className='my-name'>Ivan Buianov</h1>
      </header>
      <p className='description'>
        I am a front-end developer based in the US. I like to build
        websites and bring new ideas to life in the browser.
      </p>
      <ContactButton />
    </div>
  );
};

export default AboutMyself;
