import './FrontendDeveloper.css';

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
} from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { VscVscode } from 'react-icons/vsc';

import React from 'react';

const FrontendDeveloper = () => {
  return (
    <div className='grid-section frontend-developer'>
      <h2>Frontend Developer</h2>
      <div className='skills-container'>
        <h3 className='sills-title'>Skills:</h3>
        <ul className='skills-list'>
          <li>
            <FaHtml5 className='icon' />
            <span>HTML</span>
          </li>
          <li>
            <FaCss3 className='icon' />
            <span>CSS</span>
          </li>
          <li>
            <IoLogoJavascript className='icon' />
            <span>JavaScript</span>
          </li>
          <li>
            <FaReact className='icon' />
            <span>React</span>
          </li>
          <li>
            <RiTailwindCssFill />
            <span>Tailwind CSS</span>
          </li>
          <li>
            <FaGitAlt className='icon' />
            <span>Git</span>
          </li>
          <li>
            <FaGithub className='icon' />
            <span>Github</span>
          </li>
          <li>
            <FaBitbucket className='icon' />
            <span>Bitbucket</span>
          </li>
          <li>
            <VscVscode className='icon' />
            <span>VS Code</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrontendDeveloper;
