import './CTAButton.css';

const CTAButton = ({ children, link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='cta-btn'>
      {children}
    </a>
  );
};

export default CTAButton;
