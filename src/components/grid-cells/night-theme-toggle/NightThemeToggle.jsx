import './NightThemeToggle.css';

import React, { useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { MdOutlineLightMode } from "react-icons/md";


const NIghtThemeToggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const changeDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className='night-theme grid-cell'>
      <div
        className={`toggle ${isToggleOn ? 'active' : ''}`}
        onClick={changeDarkMode}
      >
        <div className='circle'>
          <MdOutlineLightMode className='icon sun-icon' />
          <FaMoon className='icon moon-icon' />
        </div>
      </div>
    </div>
  );
};

export default NIghtThemeToggle;
