import React from 'react';
import Imagecom from '../home/image_componet/Imagecom';
import './match.css';
const MATCH = (prop) => {
  return (
    <div>
      <div className="my_flex_match_com">
        <Imagecom image={prop.away} url={prop.url}/>
        <span id="awayname" style={{width:'10%'}}>{prop.awayname}</span>
        <div className="scoure d-flex flex-column">
          <span className="L_name">{prop.lname}</span>
          <span className="L_time">{prop.ltime}</span>
          <div>
            <span className="away_score">
              {prop.away_scoure == null ? '_' : prop.away_scoure}
            </span>
            <span className="between_score"> : </span>
            <spna className="home_score">
              {prop.home_scoure == null ? '_' : prop.home_scoure}
            </spna>
          </div>
        </div>
        <span id='homename' style={{width:'10%'}}>{prop.homename}</span>
        <Imagecom image={prop.home} />
      </div>
    </div>
  );
};

export default MATCH;
