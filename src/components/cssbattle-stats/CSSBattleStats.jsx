import './CSSBattleStats.css'

import React from 'react';

import { LuSwords } from 'react-icons/lu';

const CSSBattleStats = () => {
  return (
    <a
      href='https://cssbattle.dev/player/lordofdonuts'
      target='_blank'
      rel='noreferrer'
      className='grid-section cssbattle-stats'
    >
      <header>
        <LuSwords className='icon' />
        <h2>CSSBattle stats</h2>
      </header>
      <ul>
        <li>
          <p>
            Global rank: <span>116</span>
          </p>
        </li>
        <li>
          <p>
            Targets played: <span>194</span>
          </p>
        </li>
        <li>
          <p>
            Total score: <span>116,733</span>
          </p>
        </li>
      </ul>
    </a>
  );
};

export default CSSBattleStats;
