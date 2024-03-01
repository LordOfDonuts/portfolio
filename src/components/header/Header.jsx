import ContactBtn from '../contact-btn/ContactBtn';
import './Header.css';

const Header = ({ activeSectionNumber, setActiveSectionNumber }) => {
  return (
    <header className='main-header'>
      <p className='logo'>Ivan</p>
      <nav className='categories-navigation'>
        <ul>
          <li
            className={`${activeSectionNumber === 1 ? 'active' : ''}`}
            onClick={() => setActiveSectionNumber(1)}
          >
            All
          </li>
          <li
            className={`${activeSectionNumber === 2 ? 'active' : ''}`}
            onClick={() => setActiveSectionNumber(2)}
          >
            About
          </li>
          <li
            className={`${activeSectionNumber === 3 ? 'active' : ''}`}
            onClick={() => setActiveSectionNumber(3)}
          >
            Projects
          </li>
          <li
            className={`${activeSectionNumber === 4 ? 'active' : ''}`}
            onClick={() => setActiveSectionNumber(4)}
          >
            Media
          </li>
        </ul>
      </nav>
      <ContactBtn />
    </header>
  );
};

export default Header;
