import React from 'react';
import { Link } from 'react-router-dom';
import './Image.css';
const Imagecom = (prop) => {
  return (
    <div className="m-4">
      <Link to={prop.url}>
        <img
          style={{ objectFit: 'contain' }}
          src={prop.image}
          className="I_com"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Imagecom;
