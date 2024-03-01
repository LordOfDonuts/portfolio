import './App.css';

import React, { useState } from 'react';

import Header from './components/header/Header';
import AboutMyself from './components/grid-cells/about-myself/AboutMyself';
import MyLocation from './components/grid-cells/my-location/MyLocation';
import MyPhotos from './components/grid-cells/my-photos/MyPhotos';
import TicTacToe from './components/grid-cells/tic-tac-toe/TicTacToe';
import GitHub from './components/grid-cells/github/GitHub';
import Neumorphism from './components/grid-cells/neumorphism/Neumorphism';
import NightThemeToggle from './components/grid-cells/night-theme-toggle/NightThemeToggle';
import LeetCodeProblems from './components/grid-cells/leetcode-problems/LeetCodeProblems';
import Instagram from './components/grid-cells/instagram/Instagram';
import CSSBattlesStats from './components/grid-cells/css-battle-stats/CSSBattlesStats';

function App() {
  const [activeSectionNumber, setActiveSectionNumber] = useState(1);
  
  let sectionName = '';
  if (activeSectionNumber === 2) sectionName = 'about';
  else if (activeSectionNumber === 3) sectionName = 'projects';
  else if (activeSectionNumber === 4) sectionName = 'media';

  return (
    <div className='container'>
      <div className='wrapper'>
        <Header
          activeSectionNumber={activeSectionNumber}
          setActiveSectionNumber={setActiveSectionNumber}
        />
        <main className={`content-grid ${sectionName}`}>
          <AboutMyself />
          <MyLocation />
          <MyPhotos />
          <TicTacToe />
          <GitHub />
          <Neumorphism />
          <NightThemeToggle />
          <LeetCodeProblems />
          <Instagram />
          <CSSBattlesStats />
        </main>
      </div>
    </div>
  );
}

export default App;
