import './GithubLink.css';
import { FaGithub } from 'react-icons/fa6';

const GithubLink = () => {
  return (
    <a
      href='https://github.com/LordOfDonuts'
      target='_blank'
      rel='noreferrer'
      className='grid-section github-link'
    >
      <FaGithub className='icon' />
    </a>
  );
};

export default GithubLink;
