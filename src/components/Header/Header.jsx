import React from 'react';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <div className='container'>
            <Link to='/'style={{textDecoration:'none'}}><Navbar.Brand href="/">
              Football <span id="k-live">Live</span>
            </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Link  to='/' style={{textDecoration:'none'}}><Nav.Link href='/' >HOME</Nav.Link></Link>
                    
                    <Link  to='/matches' style={{textDecoration:'none'}}><Nav.Link href="/matches">MATCHES</Nav.Link></Link>
                    <Link  to='/competitions/all' style={{textDecoration:'none'}}><Nav.Link href="/competitions/all">COMPETITIONS</Nav.Link></Link>
                    <Link  to='/news' style={{textDecoration:'none'}}><Nav.Link href="/news">NEWS</Nav.Link></Link>
                  </Nav>
            </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
