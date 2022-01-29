import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
      <Container className="about_container">
        <Row className="align-items-center">
            <Col xl={8} className="text_containr">
                <h4>WHAT WE DO</h4>
                <h1>About Us & Our Work</h1>
                <p>Duis aute irue dolor in reperhenderit in volupate velit esse cillum dolore eu fugiat nulla pariatur. Exceteur.</p>
                <div className="sub_container">
                    <div className='text_area'>
                        <p>Duis aute irue dolor in reperhenderit in volupate velit esse cillum dolore eu fugiat</p>
                    </div>
                    <div className="card_about">
                        <p>AWARDS</p>
                        <h1>10 K</h1>
                    </div>
                </div>
            </Col>
            <Col xl = {4} className="card_containr">
                <div className='card_1'>
                    <p>CLIENTS</p>
                    <h1>8 K</h1>
                </div>
                <div className='card_2'>
                    <p>CASES</p>
                    <h1>15 K</h1>
                </div>
            </Col>
        </Row>
      </Container>
  );
}

export default About;
