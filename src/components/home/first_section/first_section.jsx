import React from 'react';
import Button from './../../../../node_modules/react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import p_messi from '../../../assest/images/messi.png';
import './first_section.css'
const FIRST_SECTION = () => {
  return (
      <section className="f-section">
        <Row style={{width:'100%'}}>
          <Col xs={12} lg={8}>
            <img className="p_messi" src={p_messi} alt="" />
          </Col>
          <Col xs={12} lg={4}>
            <div className="f-section-t">
              <span className="f-section-t-h">
                Football <span id="k-live">Live</span>
              </span>
              <p>ONE OF THE NEW WEBSITE FOR ANY THINK ABOUT FOOTBALL WORLD</p>
              <Button style={{ width: '200px' }} variant="warning">
                <a href='#matchlive' style={{ textDecoration: 'none',color:'black' }}>Let's go</a>
              </Button>
            </div>
          </Col>
        </Row>
      </section>
  );
};

export default FIRST_SECTION;
