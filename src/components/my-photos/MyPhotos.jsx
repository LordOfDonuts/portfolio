import './MyPhotos.css';

import React, { useState } from 'react';

import MyPhoto1 from '../../images/MyPhoto1.jpg';
import MyPhoto2 from '../../images/MyPhoto2.jpg';
import MyPhoto3 from '../../images/MyPhoto3.jpg';
import MyPhoto4 from '../../images/MyPhoto4.jpg';
import MyPhoto5 from '../../images/MyPhoto5.jpg';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MyPhotos = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const changeActivePhoto = (newIndex) => {
    if (newIndex > 4) setActivePhoto(0);
    else if (newIndex < 0) setActivePhoto(4);
    else setActivePhoto(newIndex);
  };

  return (
    <div className='grid-section my-photos'>
      <div className='scroll-bar'>
        <div
          className='arrow'
          onClick={() => changeActivePhoto(activePhoto - 1)}
        >
          <FaArrowLeft />
        </div>
        <ul className='dots-list'>
          <li
            className={`dot ${activePhoto === 0 ? 'active' : ''}`}
            onClick={() => setActivePhoto(0)}
          ></li>
          <li
            className={`dot ${activePhoto === 1 ? 'active' : ''}`}
            onClick={() => setActivePhoto(1)}
          ></li>
          <li
            className={`dot ${activePhoto === 2 ? 'active' : ''}`}
            onClick={() => setActivePhoto(2)}
          ></li>
          <li
            className={`dot ${activePhoto === 3 ? 'active' : ''}`}
            onClick={() => setActivePhoto(3)}
          ></li>
          <li
            className={`dot ${activePhoto === 4 ? 'active' : ''}`}
            onClick={() => setActivePhoto(4)}
          ></li>
        </ul>
        <div
          className='arrow'
          onClick={() => changeActivePhoto(activePhoto + 1)}
        >
          <FaArrowRight />
        </div>
      </div>
      <ul className='images-list'>
        <li className={`${activePhoto === 0 ? 'active' : ''}`}>
          <img src={MyPhoto2} alt='' />
        </li>
        <li className={`${activePhoto === 1 ? 'active' : ''}`}>
          <img src={MyPhoto1} alt='' />
        </li>
        <li className={`${activePhoto === 2 ? 'active' : ''}`}>
          <img src={MyPhoto3} alt='' />
        </li>
        <li className={`${activePhoto === 3 ? 'active' : ''}`}>
          <img src={MyPhoto4} alt='' />
        </li>
        <li className={`${activePhoto === 4 ? 'active' : ''}`}>
          <img src={MyPhoto5} alt='' />
        </li>
      </ul>
    </div>
  );
};

export default MyPhotos;
