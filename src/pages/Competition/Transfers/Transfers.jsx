import React from 'react';
import Competition from '../Competition';
import './Transfers.css';
const Transfers = () => {
  return (
    <div>
      <Competition state5="active" />
      <div className="container my-jsut d-flex flex-wrap">
        <span className="alert alert-warning text-uppercase">
          is not available now
        </span>
      </div>
    </div>
  );
};

export default Transfers;
