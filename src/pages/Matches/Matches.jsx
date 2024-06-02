import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MATCH from '../../components/Match/MATCH';
// import data from './data.json';
import axios from 'axios';
const PMatches = () => {
  const [data, setdata] = useState();
  const [loadData, setLoad] = useState(true);
  const getData = async () => {
    const respon = await axios.get('https://api.football-data.org/v4/matches', {
      mode: 'no-cors',
      headers: {
        'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_KEY,
        'Access-Control-Allow-Origin': '*',
      },
    });

    setdata(respon.data);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, [loadData]);

  return (
    <div>
      <div className="container mt-4 mb-4">
        <h3>Today Matches</h3>
        <h5>{data?.filters?.dateFrom}</h5>
      </div>
      {loadData ? (
        <span class="loader"></span>
      ) : (
        <div>
          {data?.matches?.map((r) => {
            let timer = new Date(r?.utcDate);
            let Mtime;
            if (timer?.getMinutes() < 10) {
              Mtime = timer?.getHours() + ':0' + timer?.getMinutes();
            } else {
              Mtime = timer?.getHours() + ':' + timer?.getMinutes();
            }

            return (
              <Link
                to={`/match/${r.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MATCH
                  away={r.awayTeam.crest}
                  home={r.homeTeam.crest}
                  awayname={r.awayTeam.shortName}
                  lname={r.competition.name}
                  homename={r.homeTeam.shortName}
                  ltime={r.status === 'TIMED' ? Mtime : r.status}
                  away_scoure={r.score.fullTime.away}
                  home_scoure={r.score.fullTime.home}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PMatches;
