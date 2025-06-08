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
                <h4 className="hero-subtitle">Master the why, not just the what<br/>at StuBoost Academy</h4>
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