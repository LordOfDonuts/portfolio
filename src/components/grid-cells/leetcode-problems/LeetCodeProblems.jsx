import './LeetCodeProblems.css';

import React from 'react';

const LeetCodeProblems = () => {
  return (
    <div className='leetcode grid-cell'>
      <div className='left'>
        <h3 className='leetcode-title'>LeetCode Solved Problems</h3>
        <div className='circle'>
          <div className='total-solved'>
            <p className='number'>55</p>
            <p className='percent'>1.8%</p>
          </div>
          <p>Solved</p>
        </div>
      </div>
      <ul className='problems-info-list'>
        <li>
          <div className='info'>
            <p className='difficulty'>EASY</p>
            <p className='solved-problems'>
              50<span className='total-problems'>/700</span>
            </p>
            <p className='problem-data'>Beats 77.5%</p>
          </div>
          <div className='bar easy'>
            <div className='fill'></div>
          </div>
        </li>
        <li>
          <div className='info'>
            <p className='difficulty'>MEDIUM</p>
            <p className='solved-problems'>
              5<span className='total-problems'>/1597</span>
            </p>
            <p className='problem-data'>Beats 23.3%</p>
          </div>
          <div className='bar medium'>
            <div className='fill'></div>
          </div>
        </li>
        <li>
          <div className='info'>
            <p className='difficulty'>HARD</p>
            <p className='solved-problems'>
              0<span className='total-problems'>/674</span>
            </p>
            <p className='problem-data'>Not enough data</p>
          </div>
          <div className='bar hard'>
            <div className='fill'></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeetCodeProblems;
