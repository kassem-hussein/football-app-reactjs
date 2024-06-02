import React from 'react';
import Imagecom from '../../components/home/image_componet/Imagecom';
import MATCH from './../../components/Match/MATCH';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SingleMatch = () => {
  const [data, setdata] = useState();
  let id = useParams().id;
  const [loadData, setLoad] = useState(true);
  const getData = async () => {
    const respon = await axios.get(
      `https://api.football-data.org/v4/matches/${id}`,
      {
        mode: 'no-cors',
        headers: {
          'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_KEY,
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    setdata(respon.data);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, [loadData]);
  let timer = new Date(data?.utcDate);
  let Mtime;
  if (timer?.getMinutes() < 10) {
    Mtime = timer?.getHours() + ':0' + timer?.getMinutes();
  } else {
    Mtime = timer?.getHours() + ':' + timer?.getMinutes();
  }
  return (
    <div className="container flex-column">
      <div className="d-flex align-items-center">
        <Imagecom image={data?.competition.emblem} />
        <h3>{data?.competition.name}</h3>
      </div>
      <div>
        <MATCH
          away={data?.awayTeam.crest}
          home={data?.homeTeam.crest}
          awayname={data?.awayTeam.name}
          lname={data?.competition.name}
          homename={data?.homeTeam.name}
          ltime={data?.status === 'TIMED' ? Mtime : data?.status}
          away_scoure={data?.score.fullTime.away}
          home_scoure={data?.score.fullTime.home}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h5 style={{ fontWeight: 'bold' }}>
          Referees: {data?.referees[0]?.name}
        </h5>
        <h3>Half Time</h3>
        <MATCH
          away={data?.awayTeam.crest}
          home={data?.homeTeam.crest}
          awayname={data?.awayTeam.name}
          lname={data?.competition.name}
          homename={data?.homeTeam.name}
          ltime={'HALF TIME'}
          away_scoure={data?.score.halfTime.away}
          home_scoure={data?.score.halfTime.home}
        />
      </div>
    </div>
  );
};

export default SingleMatch;
