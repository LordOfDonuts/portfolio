import './NYCProject.css';

import picture from '../../images/NYCProject.jpg';

import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';

const NYCProject = () => {
  return (
    <div className='grid-section nyc-project'>
      <header>
        <div className='name'>
          <p className='subtitle'>PROJECT</p>
          <h2>About NYC</h2>
        </div>
        <div className='tech-stack'>
          <p className='subtitle'>BUILT WITH</p>
          <ul className='project-stack-list'>
            <li className='project-stack-item'>
              <FaHtml5 />
            </li>
            <li className='project-stack-item'>
              <FaCss3 />
            </li>
            <li className='project-stack-item'>
              <IoLogoJavascript />
            </li>
            <li className='project-stack-item'>
              <FaReact />
            </li>
          </ul>
        </div>
        <div className='buttons'>
          <a href='' className='project-button'>
            View Project
          </a>
          <a
            href='https://github.com/LordOfDonuts/new-york-city'
            target='_blank'
            rel='noreferrer'
            className='project-button'
          >
            Source Code
          </a>
        </div>
      </header>
      <a href=''>
        <img src={picture} alt='' className='project-image' />
      </a>
    </div>
  );
};

export default NYCProject;
