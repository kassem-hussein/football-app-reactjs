import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  const handleSubmut=(e)=>{
     e.preventDefault();
     console.log(e.target[0].value)
     console.log(e.target[1].value)
     alert(`your message is ${e.target[1].value}`)
  }
  return (
    <div className="bg-dark p-3" style={{color:'white'}}>
      <div className="d-flex container" id='footer'>
        <div style={{marginRight:'10%'}}>
          <h3 style={{color:'#FBCA14'}}>Pages</h3>  
            <Link to='/' style={{textDecoration:'none'}}><Nav.Link href="/" style={{color:'white',marginBottom:'7px',marginTop:'10px'}}>HOME</Nav.Link></Link>
            <Link to='/matches'style={{textDecoration:'none'}}><Nav.Link href="/matches" style={{color:'white',marginBottom:'7px'}}>MATCHES</Nav.Link></Link>
            <Link to='/competitions/all'style={{textDecoration:'none'}}><Nav.Link href="/competitions/all"style={{color:'white',marginBottom:'7px'}}>COMPETITIONS</Nav.Link></Link>
            <Link to='/news'style={{textDecoration:'none'}}><Nav.Link href="/news" style={{color:'white',marginBottom:'7px'}}>NEWS</Nav.Link></Link>
        </div>
        <div className='d-flex flex-column' id='c-form'>
          <h3>Contact-us</h3>
          <form className='d-flex flex-column' onSubmit={handleSubmut}>
            <input id='c-input' type="email" name="email" placeholder='enter your email'/>
            <textarea id='c-text' rows="5" cols="50"placeholder='write your message here'></textarea>
            <Button type='submit' variant='warning'>Send</Button>  
          </form>
        </div>
      </div>
      <div style={{textAlign:'center',marginTop:'2%'}}>
        <h6>All Right are sved for football live</h6>
      </div>
    </div>
  );
};

export default Footer;
