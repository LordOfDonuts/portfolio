import './Neumorphism.css';

import NeumorphismPhoto from '../../../images/my-projects/Neumorphism.png';

import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';

import React from 'react';
import CTAButton from '../../cta-button/CTAButton';
import BuiltWith from '../../built-with/BuiltWith';
import ProjectTitle from '../../project-title/ProjectTitle';

const Neumorphism = () => {
  return (
    <div className='neumorphism-project grid-cell'>
      <div className='project-info'>
        <ProjectTitle name={'Neumorphism Components'} />
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
      <img src={NeumorphismPhoto} alt='' className='neumorphism-picture' />
      <div className='buttons'>
        <CTAButton link={'http://neumorphism-components.online'}>View project</CTAButton>
      </div>
    </div>
  );
};

export default Neumorphism;
