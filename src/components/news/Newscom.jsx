import React from 'react'
import './new.css'
import noimage from '../../assest/images/no-image.png'
const Newscom = (prop) => {
  return (
    <div className='d-flex flex-column align-content-center'>
      <img id='news-img' src={prop.image?prop.image:noimage} alt=""/>
      <div style={{backgroundColor:'black',color:'white',borderRadius:'0px 0px 20px 20px',marginBottom:'20px'}}>
            <h4 id='news-p' className='mt-2'>{prop.title}</h4>
            <p  style={{paddingLeft:'10px'}}>{prop.desc}</p>
            <p style={{paddingRight:'20px',textAlign:'end',color:'#FCBA14'}}>{prop.date}</p> 
      </div>
    </div>
  )
}

export default Newscom
