import './LinkedInLink.css';
import { FaLinkedinIn } from 'react-icons/fa6';

const LinkedInLink = () => {
  return (
    <a
      href='https://www.linkedin.com/in/ivan-b-bb12492a5/'
      target='_blank'
      rel='noreferrer'
      className='grid-section linkedin-link'
    >
      <FaLinkedinIn className='icon' />
    </a>
  );
};

export default LinkedInLink;
