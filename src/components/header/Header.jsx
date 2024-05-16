import ContactButton from '../contact-button/ContactButton';
import './Header.css';

const Header = ({ filterIndex, setFilterIndex }) => {
  return (
    <header className='main-header'>
      <nav className='main-navigation'>
        <ul>
          <li
            className={`${filterIndex === 0 ? 'active' : 'inactive'}`}
            onClick={() => setFilterIndex(0)}
          >
            All
          </li>
          <li
            className={`${filterIndex === 1 ? 'active' : 'inactive'}`}
            onClick={() => setFilterIndex(1)}
          >
            About
          </li>
          <li
            className={`${filterIndex === 2 ? 'active' : 'inactive'}`}
            onClick={() => setFilterIndex(2)}
          >
            Projects
          </li>
          <li
            className={`${filterIndex === 3 ? 'active' : 'inactive'}`}
            onClick={() => setFilterIndex(3)}
          >
            Media
          </li>
        </ul>
      </nav>
      <ContactButton />
    </header>
  );
};

export default Header;
