import './TicTacToe.css';

import TicTacToePhoto from '../../../images/my-projects/TicTacToe.png';
import React from 'react';

import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import CTAButton from '../../cta-button/CTAButton';
import BuiltWith from '../../built-with/BuiltWith';
import ProjectTitle from '../../project-title/ProjectTitle';

const TicTacToe = () => {
  return (
    <div className='tic-tac-toe-project grid-cell'>
      <div className='project-info'>
        <ProjectTitle name={'Ultimate Tic Tac Toe'}/>
        <BuiltWith>
          <ul>
            <li>
              <FaHtml5 className='built-with-icon' title='HTML' />
            </li>
            <li>
              <FaCss3Alt className='built-with-icon' title='CSS' />
            </li>
            <li>
              <IoLogoJavascript
                className='built-with-icon'
                title='JavaScript'
              />
            </li>
            <li>
              <FaReact className='built-with-icon' title='React' />
            </li>
          </ul>
        </BuiltWith>
      </div>
      <img src={TicTacToePhoto} alt='' className='project-picture' />
      <div className='buttons'>
        <CTAButton link={'http://ultimate-tic-tac-toe.online'}>View project</CTAButton>
      </div>
    </div>
  );
};

export default TicTacToe;
