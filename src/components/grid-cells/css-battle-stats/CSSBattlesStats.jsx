import './CSSBattlesStats.css';

import React from 'react';

const CSSBattlesStats = () => {
  return (
    <div className='cssbattles grid-cell'>
      <h3 className='cssbattles-title'>CSSBattle Stats</h3>
      <ul className='stats-list'>
        <li>
          <p className='stats-number'>2159</p>
          <p className='stats-text'>Global rank</p>
        </li>
        <li>
          <p className='stats-number'>64</p>
          <p className='stats-text'>Targets played</p>
        </li>
        <li>
          <p className='stats-number'>38855.42</p>
          <p className='stats-text'>Total score</p>
        </li>
      </ul>
    </div>
  );
};

export default CSSBattlesStats;
