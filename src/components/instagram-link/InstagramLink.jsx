import './InstagramLink.css';
import { FaInstagram } from 'react-icons/fa6';

const InstagramLink = () => {
  return (
    <a
      href='https://www.instagram.com/director_of_potatoes/'
      target='_blank'
      rel='noreferrer'
      className='grid-section instagram-link'
    >
      <FaInstagram />
    </a>
  );
};

export default InstagramLink;
