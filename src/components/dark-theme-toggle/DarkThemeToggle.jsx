import './DarkThemeToggle.css'

import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

const DarkThemeToggle = ({ isDarkTheme, changeTheme }) => {
  return (
    <div className='grid-section theme-toggle'>
      <div
        className={`toggle ${isDarkTheme ? 'active' : ''}`}
        onClick={changeTheme}
      >
        <div className='toggle-circle'>
          <BsSunFill className='theme-icon sun' />
          <FaMoon className='theme-icon moon' />
        </div>
      </div>
    </div>
  );
};

export default DarkThemeToggle;
