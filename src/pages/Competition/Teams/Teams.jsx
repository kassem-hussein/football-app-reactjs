import React from 'react';
import Imagecom from '../../../components/home/image_componet/Imagecom';
import Competition from '../../../pages/Competition/Competition';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Teams = () => {
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
      `https://api.football-data.org/v4/competitions/${id}/teams`,
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
      <Competition state2="active" />
      <div className="container">
        <h3>Teams</h3>
      </div>
      {loadData ? (
        <span class="loader"></span>
      ) : (
        <div className="container flex-wrap">
          {data?.teams?.map((r) => {
            return <Imagecom image={r.crest} url={`${r.id}`} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Teams;
