import React from 'react'
import './secund.css'
import Imagecom from '../image_componet/Imagecom'
import PL from '../../../assest/images/1.png'
import BL1 from '../../../assest/images/2.png'
import EL from '../../../assest/images/3.png'
import PD from '../../../assest/images/4.png'
import FL1 from '../../../assest/images/5.png'
import CL from '../../../assest/images/6.png'

const Secund_Section = () => {
  return (
    <div>
      <h3 className='title'>The most popular comptitions</h3>
      <div className='d-flex flex-wrap'>
            <Imagecom url='Competition/PL/Premier_League' image={PL}/>
            <Imagecom url='Competition/BL1/Bundesliga' image={BL1}/>
            <Imagecom url='Competition/EL/European_Championship'image={EL}/>
            <Imagecom url='Competition/PD/La_Liga'image={PD}/>
            <Imagecom url='Competition/FL1/Ligue_1'image={FL1}/>
            <Imagecom url='Competition/CL/UEFA_Champions_League'image={CL}/>
      </div>
      
    </div>
  )
}

export default Secund_Section
