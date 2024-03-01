import './MyPhotos.css';

import React, { useState } from 'react';

import Photo1 from '../../../images/my-photos/1.png';
import Photo2 from '../../../images/my-photos/2.png';
import Photo3 from '../../../images/my-photos/3.png';
import Photo4 from '../../../images/my-photos/4.png';
import Photo5 from '../../../images/my-photos/5.png';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const MyPhotos = () => {
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const changePhotoIndex = (newIndex) => {
    if (newIndex > photos.length - 1) newIndex = 0;
    else if (newIndex < 0) newIndex = photos.length - 1;

    setCurrentPhotoIndex(newIndex);
  };

  return (
    <div className='photos grid-cell'>
      <nav className='photos-nav'>
        <FaAngleLeft
          className='arrow-icon'
          onClick={() => changePhotoIndex(currentPhotoIndex - 1)}
        />
        <ul className='nav-circles'>
          {photos.map((item, index) => {
            return (
              <li
                key={index}
                className={`${currentPhotoIndex === index ? 'active' : ''}`}
              ></li>
            );
          })}
        </ul>
        <FaAngleRight
          className='arrow-icon'
          onClick={() => changePhotoIndex(currentPhotoIndex + 1)}
        />
      </nav>
      <ul className='photos-list'>
        {photos.map((item, index) => {
          return (
            <li key={index}>
              <img
                src={item}
                alt=''
                className={`photo ${
                  currentPhotoIndex === index ? 'active' : ''
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyPhotos;
