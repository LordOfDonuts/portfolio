import './ContactInformation.css';

import React from 'react';

const ContactInformation = () => {
  return (
    <div className='grid-section contact-information'>
      <header>
        <h2>Contact Information</h2>
      </header>
      <ul className='contacts-container'>
        <li>
          <p className='title'>Email:</p>
          <p className='contact'>directorofpotatoes@gmail.com</p>
        </li>
        <li>
          <p className='title'>Phone:</p>
          <p className='contact'>(541)-261-9274</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInformation;
