import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='p-2'>
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>About Us</p>
                        <p>About Us</p>
                        <p>About Us</p>
                    </Col>
                    <Col className='p-2'>
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>About Us</p>
                        <p>About Us</p>
                        <p>About Us</p>
                    </Col>
                    <Col className='p-2'>
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>About Us</p>
                        <p>About Us</p>
                        <p>About Us</p>
                    </Col>
                </Row>
            </Container>
            <div className='text-center footer-bottom'>
                <h6>Copyright © 2017 Your Company</h6>
            </div>
        </div>
    )
}

export default Footer;