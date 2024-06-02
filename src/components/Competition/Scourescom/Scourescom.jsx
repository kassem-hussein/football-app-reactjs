import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Scourescom.css';
const Scourescom = () => {
  const [data, setdata] = useState();
  let id = useParams().id;
  if (id === 'EL') {
    id = 'EC';
  } else if (id === 'qatar') {
    id = 'WC';
  }
  const [loadData, setLoad] = useState(true);
  const getData = async () => {
    const respon = await axios.get(
      `http://api.football-data.org/v4/competitions/${id}/scorers`,
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
    <div>
      <h3>Scorers</h3>
      {loadData ? (
        <span class="loader"></span>
      ) : (
        
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Team</th>
                <th>Position</th>
                <th>Goals</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>
              {data?.scorers?.map((v, k) => {
                return (
                  <tr>
                    <td>{k + 1}</td>
                    <td>{v.player.name}</td>
                    <td>
                      <img
                        src={v.team.crest}
                        style={{
                          width: '20px',
                          marginRight: '10px',
                          height: '20px',
                          borderRadius: '50%',
                          objectFit: 'contain',
                        }}
                        alt={v.team.id}
                      />
                      {v.team.name}
                    </td>
                    <td>{v.player.position}</td>
                    <td>{v.goals}</td>
                    <td>{v.assists}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        
      )}
    </div>
  );
};

export default Scourescom;
