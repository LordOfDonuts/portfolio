import './MyLocation.css';
import React from 'react';

import MyLocationPhoto from '../../../images/MyLocation.png';

const MyLocation = () => {
  return (
    <div className='location grid-cell'>
      <p className='description'>
        Currently living in <br />{' '}
        <a
          href='https://maps.app.goo.gl/SDdcEv31hZtyuhAL8'
          target='_blank'
          rel='noreferrer'
        >
          Eugene, OR
        </a>
      </p>
      <img src={MyLocationPhoto} alt='' className='location-img' />
    </div>
  );
};

export default MyLocation;
