import './App.css';

import { useState } from 'react';

import Header from './components/header/Header';
import DarkThemeToggle from './components/dark-theme-toggle/DarkThemeToggle';
import AboutMyself from './components/about-myself/AboutMyself';
import FrontendDeveloper from './components/frontend-developer/FrontendDeveloper';
import GithubLink from './components/github-link/GithubLink';
import CSSBattleStats from './components/cssbattle-stats/CSSBattleStats';
import LinkedInLink from './components/linkedin-link/LinkedInLink';
import InstagramLink from './components/instagram-link/InstagramLink';
import ContactInformation from './components/contact-information/ContactInformation';
import MyPhotos from './components/my-photos/MyPhotos';
import TicTacToeProjects from './components/tic-tac-toe-project/TicTacToeProjects';
import DrOilProject from './components/dr-oil-project/DrOilProject';
import NYCProject from './components/nyc-project/NYCProject';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [filterIndex, setFilterIndex] = useState(0);
  const bodyElement = document.body;

  const changeTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      bodyElement.classList.remove('dark-mode');
    } else {
      setIsDarkTheme(true);
      bodyElement.classList.add('dark-mode');
    }
  };

  const currentFilterName = () => {
    let filterName = '';

    if (filterIndex === 1) filterName = 'about';
    else if (filterIndex === 2) filterName = 'projects';
    else if (filterIndex === 3) filterName = 'media';

    return filterName;
  };

  return (
    <div>
      <Header filterIndex={filterIndex} setFilterIndex={setFilterIndex} />
      <div className={`grid-sections ${currentFilterName()}`}>
        <AboutMyself />
        <FrontendDeveloper />
        <GithubLink />
        <DarkThemeToggle isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <MyPhotos />
        <CSSBattleStats />
        <NYCProject />
        <TicTacToeProjects />
        <LinkedInLink />
        <InstagramLink />
        <DrOilProject />
        <ContactInformation />
      </div>
    </div>
  );
}

export default App;
