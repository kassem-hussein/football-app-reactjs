import React from 'react';
import Imagecom from '../../components/home/image_componet/Imagecom';
import { Link, useParams } from 'react-router-dom';
import './Competition.css';
import Competitoncom from '../../components/Competition/Competitioncom/Competitoncom';
const Competition = (props) => {
  let { id, name } = useParams();
  let Nname = name.replaceAll('_', ' ');
  let oname = name.replaceAll(' ', '_');
  return (
    <div className="container flex-column mt-4">
      <div className="d-flex w-100 align-items-center">
        <Imagecom image={`https://crests.football-data.org/${id}.png`} />
        <h3 id="L_name">{Nname}</h3>
      </div>
      <div>
        <div className=" d-flex flex-wrap  mt-4 mb-4  justify-content-between">
          <Link
            to={`/Competition/${id}/${oname}/standings`}
            style={{ textDecoration: 'none' }}
          >
            <Competitoncom state={props.state1}>Standings</Competitoncom>
          </Link>
          <Link
            to={`/Competition/${id}/${oname}/teams`}
            style={{ textDecoration: 'none' }}
          >
            <Competitoncom state={props.state2}>Teams</Competitoncom>
          </Link>
          <Link
            to={`/Competition/${id}/${oname}/scorers`}
            style={{ textDecoration: 'none' }}
          >
            <Competitoncom state={props.state3}>Scorers</Competitoncom>
          </Link>
          <Link
            to={`/Competition/${id}/${oname}/matches`}
            style={{ textDecoration: 'none' }}
          >
            <Competitoncom state={props.state4}>Matches</Competitoncom>
          </Link>
          <Link
            to={`/Competition/${id}/${oname}/transfers`}
            style={{ textDecoration: 'none' }}
          >
            <Competitoncom state={props.state5}>Transfers</Competitoncom>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Competition;
