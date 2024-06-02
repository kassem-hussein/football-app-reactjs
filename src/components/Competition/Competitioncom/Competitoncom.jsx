import React from 'react'
import './Competitioncom.css'
const Competitoncom = (props) => {
  return (
    <div className='C-NavIcon' style={{background:props.state ==='active'?'#FCBA14':'black',color:props.state ==='active'?'black':'white'}}>
      <p className='C-NavIcon-p'>{props.children}</p>
    </div>
  )
}

export default Competitoncom
