import React from 'react';
import Scourescom from '../../../components/Competition/Scourescom/Scourescom';
import Competition from '../Competition';
const Scoures = () => {
  return (
    <div>
      <Competition state3="active" />
      <div>
        <div className='container'>
            <div style={{width:'100%'}}> 
                  <Scourescom/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Scoures;
