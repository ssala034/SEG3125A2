import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import heroImg from '../assets/hero-image.jpeg'; 
import './Hero.css';

const Hero = () => (
    <Container fluid className="py-5" style={{ background: "#fafafa" }}>
    <Row className="align-items-center">
      <Col md={8}>
        <h2>Welcome to Our Platform</h2>
        <p>Empower your learning journey with expert help.</p>
      </Col>
      <Col md={4} className="text-center">
        <img src={heroImg} alt="Learning support" className='hero-img'/>
      </Col>
    </Row>
  </Container>
    

  
);

export default Hero;


/**
 * 
 * 
 * <Container fluid className="py-5" style={{ background: "#fafafa" }}>
    <Row className="align-items-center">

      <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
        <h1 className="fw-bold mb-3">Discover More Suitable<br/>Learning Support</h1>
        <h4 className="text-muted mb-4">Master the why, not just the what</h4>
        <InputGroup className="mb-3" style={{ maxWidth: 400, margin: "0 auto 0 0" }}>
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <FormControl placeholder="Search by topic/location/type" />
        </InputGroup>
      </Col>
      
      <Col md={6} className="text-center">
        <img
          src={heroImg}
          alt="Learning support"
          style={{
            width: 320,
            height: 220,
            objectFit: "cover",
            borderRadius: "50% / 40%",
            border: "2px solid #333",
            boxShadow: "0 2px 16px rgba(0,0,0,0.1)"
          }}
        />
      </Col>
      
    </Row>
  </Container>
 */