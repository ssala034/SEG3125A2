import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import heroImg from '../assets/hero-image.jpeg'; 
import './Hero.css';

const Hero = () => (
    <Container fluid className="py-5" style={{ background: "#fafafa" }}>
        <Row className="align-items-center">
        <Col md={8}>
            <div className="hero-center my-5">
                <h1 className="hero-title">Discover More Suitable<br/>Learning Support</h1>
                <h4 className="hero-subtitle">Master the why, not just the what</h4>
                <a href="/appointment" className="button">Book an Appointment</a>
            </div>
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


  <div class="hero-center py-5">
                <div class="row mt-5">
                    <div class="col-md-5 pt-5 intro">
                        <h1 class="mb-4">Discover More Suitable Learning Support</h1>
                        <h4 class="mb-4"> Master the why, not just the what</h4>
                        <a href="#projects" class="btn btn-primary mt-5">View Projects</a>
                    </div>
                </div>
            </div>
 */
