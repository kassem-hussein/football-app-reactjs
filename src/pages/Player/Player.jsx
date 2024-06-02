import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Player = () => {
  let id = useParams().id;
  const [loadData, setLoad] = useState(true);
  const [data, setdata] = useState();
  const getData = async () => {
    const respon = await axios.get(
      `https://api.football-data.org/v4/persons/${id}`,
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
  return (
    <div className="container">
      <div className="w-100 mt-5 mb-3">
        <h3 className="text-center">
          Player <span style={{ color: '#FBCA14' }}>Information</span>
        </h3>
        <div className="mb-4">
          <h4>Name : {data?.name}</h4>
          <h4>Nationality : {data?.nationality}</h4>
          <h4>Postion : {data?.position}</h4>
          <h4>Shirt Number : {data?.shirtNumber}</h4>
          <h4>Date Of Birth : {data?.dateOfBirth}</h4>
        </div>
        <h3 className="text-center">
          Player <span style={{ color: '#FBCA14' }}>For</span>
        </h3>
        <div className="d-flex align-items-center">
          <img
            src={data?.currentTeam.crest}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginRight: '7px',
            }}
            alt={data?.currentTeam.name}
          />
          <h4 style={{ marginLeft: '4px' }}> {data?.currentTeam.name}</h4>
        </div>
        <h4 className="mb-5">
          Contract:
          <span style={{ margin: '0 10px', color: '#FBCA14' }}>Start :</span>{' '}
          {data?.currentTeam.contract.start}
          <span style={{ margin: '0 10px', color: '#FBCA14' }}>End :</span>
          {data?.currentTeam.contract.until}
        </h4>
        <h3 className="text-center">
          Running <span style={{ color: '#FBCA14' }}>Competitions</span>
        </h3>
        {data?.currentTeam.runningCompetitions.map((c) => {
          return (
            <div className="d-flex align-items-center mb-2">
              <img
                src={c.emblem}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginRight: '7px',
                }}
                alt={c.id}
              />
              <h5>{c.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Player;
