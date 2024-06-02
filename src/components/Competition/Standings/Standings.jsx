import React from 'react';
import './Standings.css';
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const StandingsCom = () => {
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
      `http://api.football-data.org/v4/competitions/${id}/standings`,
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
  let standingsLength = data?.standings.length;
  return (
    <div>
      {
        loadData?<span class="loader"></span>:
        data?.standings.map((v, k) => {
          return (
            <div>
              {data?.season?.winner ? <h3>{data?.season?.winner}</h3> : ''}
              <h3>{standingsLength > 1 ? v?.group : 'Standings'}</h3>
              {v?.group || k === 0 ? (
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>CUP</th>
                      <th>MP</th>
                      <th>W</th>
                      <th>D</th>
                      <th>L</th>
                      <th>GF</th>
                      <th>GA</th>
                      <th>GD</th>
                      <th>PTS</th>
                      {v.group === null ? <th>Last 5</th> : ''}
                    </tr>
                  </thead>
                  <tbody>
                    {v.table?.map((r) => {
                      return (
                        
                              <tr>
                                <td>{r.position}</td>
                                <td>
                                <img
                                    src={r.team.crest}
                                    style={{
                                      width: '20px',
                                      marginRight: '10px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      objectFit: 'contain',
                                    }}
                                    alt={r.team.id}
                                  />
                                  <Link style={{textDecoration:'none',color:'black'}} to={`/teams/${r.team.id}`}>{r.team.name}</Link>
                                </td>
                                <td>{r.playedGames}</td>
                                <td>{r.won}</td>
                                <td>{r.draw}</td>
                                <td>{r.lost}</td>
                                <td>{r.goalsFor}</td>
                                <td>{r.goalsAgainst}</td>
                                <td>{r.goalDifference}</td>
                                <td>{r.points}</td>
                                {v.group === null ? (
                                  <td className="d-flex">
                                    {r?.form?.split(',').map((r) => {
                                      let style = '';
                                      if (r === 'W') {
                                        style = 'green';
                                      } else if (r === 'D') {
                                        style = 'yellow';
                                      } else {
                                        style = 'red';
                                      }
                                      return (
                                        <div
                                          style={{
                                            width: '20px',
                                            height: '20px',
                                            padding: '3px',
                                            margin: '5px 2px',
                                            color: 'white',
                                            borderRadius: '50%',
                                            backgroundColor: style,
                                          }}
                                        ></div>
                                      );
                                    })}
                                  </td>
                                ) : (
                                  ''
                                )}
                              </tr>
                        
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                ''
              )}
            </div>
          );
        })
      }
    </div>
  );
};

export default StandingsCom;
