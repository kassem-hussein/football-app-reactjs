import React from 'react';
import './home.css';
import {
  FIRST_SECTION,
  SECUND_SECTION,
  THARD_SECTION,
  MatchLive,
} from '../../components/index';

const Home = () => {
  return (
    <div>
      <div className="container d-flex flex-column">
        <div>
          <FIRST_SECTION />
        </div>
        <div className="mt-5">
          <SECUND_SECTION />
        </div>
        <div className="mt-5">
          <THARD_SECTION />
        </div>
      </div>
      <div className="mt-5">
        <MatchLive />
      </div>
    </div>
  );
};

export default Home;
