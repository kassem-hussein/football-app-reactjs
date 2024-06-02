import React from 'react';
import './Transferscom.css';
const Transfercom = (props) => {
  return (
    <div className="container Transfer">
      <div className='d-flex T-S-1 flex-column justify-content-end align-items-center'>
        <h6>From</h6>
        <div><img src={props.fromImage} style={{width:'20px',marginRight:'10px',height:'20px',borderRadius:'50%' ,objectFit:'contain'}} alt=''/>{props.fromName}</div>
      </div>
      <div className='d-flex T-S-2 text-center flex-column justify-content-center align-items-center'>
        <div>
          <h6>{props.playerName}</h6>
        </div>
        <h6 style={{color:'#FBCA14'}} >{props.type}</h6>
      </div>
      <div className='d-flex T-S-3 flex-column justify-content-end align-items-center' >
        <h6>TO</h6>
        <div><img src={props.toIamge} style={{width:'20px',marginRight:'10px',height:'20px',borderRadius:'50%' ,objectFit:'contain'}} alt=''/>{props.toName}</div>
      </div>
    </div>
  );
};

export default Transfercom;
