import React from 'react'
import MATCH from '../../Match/MATCH'
import './Match.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
const MatchLive = () => {
  let url='https://v3.football.api-sports.io/fixtures?live=all'
  const [data, setdata] = useState();
  const [loadData, setLoad] = useState(true);
  const getData = async () => {
    const respon = await axios.get(url, {
      mode: 'no-cors',
      headers: {
        'x-rapidapi-key':process.env.REACT_APP_API_KEY,
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(respon)
    setdata(respon.data);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, [loadData]);
  return (
    <div>
      <div className='container'>
        
         <h3 className='title' id='matchlive'>MATCHES IS <span className='word_Live'>LIVE</span> NOW</h3>
         
      </div>
      {
        loadData?<span class="loader"></span>:data?.results===0?<span className='alert alert-warning mx-5 d-flex justify-content-center align-items-center'>No Match Live</span>:data?.response?.map(r=>{
          return(
            <MATCH away={r?.teams?.away?.logo} awayname={r.teams.away.name} home={r?.teams?.home?.logo} homename={r.teams.home.name} lname={r?.league?.name} ltime={r.fixture.status.elapsed} away_scoure={r?.goals?.away} home_scoure={r?.goals?.home}/>
            
          )
        })
      }
     
    </div>
  )
}

export default MatchLive
