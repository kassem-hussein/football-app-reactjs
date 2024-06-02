import React from 'react';
import Table from 'react-bootstrap/Table';
import Imagecom from '../../components/home/image_componet/Imagecom';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Team = () => {
  let id = useParams().id;
  const [loadData, setLoad] = useState(true);
  const [data, setdata] = useState();
  const getData = async () => {
    const respon = await axios.get(
      `https://api.football-data.org/v4/teams/${id}`,
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
      <div className="container flex-column">
        <div className="d-flex align-items-center">
          <Imagecom image={data?.crest} />
          <div className="flex-column">
            <h4>{data?.name}</h4>
            <div className="flex-row">
              <span>{data?.venue}</span>
              <span style={{ color: '#FCBA14', marginLeft: '4px' }}>
                {data?.founded}
              </span>
            </div>
          </div>
        </div>
        <div>{data?.coach.id ? <h4>Coach :{data?.coach.name}</h4> : ''}</div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>position</th>
              <th>dateOfBirth</th>
              <th>nationality</th>
            </tr>
          </thead>
          <tbody>
            {data?.squad?.map((v, k) => {
              return (
                <tr>
                  <td>{k + 1}</td>
                  <td>
                    <Link
                      to={`/player/${v.id}`}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {v?.name}
                    </Link>
                  </td>
                  <td>{v?.position}</td>
                  <td>{v?.dateOfBirth}</td>
                  <td>{v?.nationality}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Team;
