import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../services/img/about.jpg';

const About = () => {
    return (
        <div className='container mb-2 mt-2'>
            <h1 className='text-center mt-5'>About</h1>
            <div>
                <Row>
                    <Col sm={4}>
                        <img width="100%" src={img} alt="profile" />
                    </Col>
                    <Col sm={8}>
                        <div classNameName='p-5'>
                            <h3>UI/UX Designer & Web Developer</h3>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                            <Row>
                                <Col sm={6}>
                                    <h6>Name: <span className="text-secondary">Kate Winslet</span></h6>
                                    <h6>Degree: <span className="text-secondary">Master</span></h6>
                                    <h6>Phone: <span className="text-secondary">+012 345 6789</span></h6>
                                    <h6>Address: <span className="text-secondary">123 Street, New York, USA</span></h6>
                                </Col>
                                <Col sm={6}>
                                    <h6>Birthday: <span className="text-secondary">1 April 1990</span></h6>
                                    <h6>Experience: <span className="text-secondary">10 Years</span></h6>
                                    <h6>Email: <span className="text-secondary">info@example.com</span></h6>
                                    <h6>Freelance: <span className="text-secondary">Available</span></h6>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;