import React from 'react'
import Competition from '../../../pages/Competition/Competition'
import StandingsCom from '../../../components/Competition/Standings/Standings'

const Standings = () => {
  return (
    <div>
      <Competition state1='active'/>
      <div className='container'>
            <div style={{width:'100%'}}>
                  <StandingsCom/>     
            </div>
      </div>
    </div>
  )
}

export default Standings
