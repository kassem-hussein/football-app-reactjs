import React from 'react'
import Imagecom from '../image_componet/Imagecom'
import arsenal from '../../../assest/images/arsenalpng2.png'
import Barcelona from '../../../assest/images/Barcelona.png'
import Bayrn from '../../../assest/images/Bayrn.png'
import inter from '../../../assest/images/inter.png'
import Liverpool from '../../../assest/images/liverpool3.png'
import man from '../../../assest/images/man2.png'
import Real from '../../../assest/images/Real2.png'
const Thard_section = () => {
  return (
    <div>
      <h3 className='title'>The most popular teams</h3>
      <div className='d-flex flex-wrap'>
            <Imagecom url='/teams/57' image={arsenal}/>
            <Imagecom url='/teams/81' image={Barcelona}/>
            <Imagecom url='/teams/5' image={Bayrn}/>
            <Imagecom url='/teams/108' image={inter}/>
            <Imagecom url='/teams/64' image={Liverpool}/>
            <Imagecom url='/teams/65' image={man}/>
            <Imagecom url='/teams/86' image={Real}/>
            
      </div>
    </div>
  )
}

export default Thard_section
