import './DrOilProject.css';

import picture from '../../images/DrOilProject.jpg';

import { TbBrandCSharp } from 'react-icons/tb';
import { FaUnity } from 'react-icons/fa6';

const DrOilProject = () => {
  return (
    <div className='grid-section dr-oil-project'>
      <header>
        <div className='name'>
          <p className='subtitle'>PROJECT</p>
          <h2>Dr. Oil</h2>
        </div>
        <div className='tech-stack'>
          <p className='subtitle'>BUILT WITH</p>
          <ul className='project-stack-list'>
            <li className='project-stack-item'>
              <FaUnity />
            </li>
            <li className='project-stack-item'>
              <TbBrandCSharp />
            </li>
          </ul>
        </div>
      </header>
      <a
        href='https://www.nintendo.com/us/store/products/dr-oil-switch/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={picture} alt='' className='project-image' />
      </a>
      <div className='buttons'>
        <a
          href='https://www.nintendo.com/us/store/products/dr-oil-switch/'
          target='_blank'
          rel='noreferrer'
          className='project-button'
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default DrOilProject;
