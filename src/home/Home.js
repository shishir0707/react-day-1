import React from 'react';
import './Home.scss';
import profile from '../img/profile.png';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';
import { Col, Row } from 'react-bootstrap';
import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.jpg';
import blog3 from '../img/blog-3.jpg';



const Team = () => {
    return (
        <div>


            <div id='about'>
                <div className='container p-2'>
                    <div className='text-center'>
                        <h1>About Me</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                    <Row>
                        <Col sm={4}>
                            <img width="100%" src={profile} alt="profile" />
                        </Col>
                        <Col sm={8}>
                            <div className='p-5'>
                                <h3>UI/UX Designer & Web Developer</h3>
                                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                                <Row>
                                    <Col sm={6}>
                                        <h6>Name: <span class="text-secondary">Kate Winslet</span></h6>
                                        <h6>Degree: <span class="text-secondary">Master</span></h6>
                                        <h6>Phone: <span class="text-secondary">+012 345 6789</span></h6>
                                        <h6>Address: <span class="text-secondary">123 Street, New York, USA</span></h6>
                                    </Col>
                                    <Col sm={6}>
                                        <h6>Birthday: <span class="text-secondary">1 April 1990</span></h6>
                                        <h6>Experience: <span class="text-secondary">10 Years</span></h6>
                                        <h6>Email: <span class="text-secondary">info@example.com</span></h6>
                                        <h6>Freelance: <span class="text-secondary">Available</span></h6>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


            <div className='p-2 container mb-2' id='team'>
                <div className='text-center'>
                    <h1>Our Team</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className='row'>
                    <Col sm={3} className='text-center'>
                        <img width="100%" src={team1} alt="img1" />
                        <h6 className='pt-3'>Walter White</h6>
                        <i><span>Chief Executive Officer</span></i>
                    </Col>
                    <Col sm={3} className='text-center'>
                        <img width="100%" src={team2} alt="img2" />
                        <h6 className='pt-3'>Sarah Jhinson</h6>
                        <i><span>Product Manager</span></i>
                    </Col>
                    <Col sm={3} className='text-center'>
                        <img width="100%" src={team3} alt="img3" />
                        <h6 className='pt-3'>William Anderson</h6>
                        <i><span>Chief Executive Officer</span></i>
                    </Col>
                    <Col sm={3} className='text-center'>
                        <img width="100%" src={team4} alt="img4" />
                        <h6 className='pt-3'>Amanda Jepson</h6>
                        <i><span>Product Manager</span></i>
                    </Col>
                </div>
            </div>


            <div id='blog'>
                <div className='container'>
                    <div className='text-center p-4'>
                        <h1 className='text-center mt-2'>LATEST BLOG</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                    <Row>
                        <Col sm={4} className='p-3'>
                            <img width="100%" src={blog1} alt="blog-img" />
                            <h5 className='py-4'>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                            <button><a link="">Read More..</a></button>
                        </Col>
                        <Col sm={4} className='p-3'>
                            <img width="100%" src={blog2} alt="blog-img2" />
                            <h5 className='py-4'>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                            <button><a link="">Read More..</a></button>
                        </Col>
                        <Col sm={4} className='p-3'>
                            <img width="100%" src={blog3} alt="blog-img3" />
                            <h5 className='py-4'>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                            <button><a link="">Read More..</a></button>
                        </Col>
                    </Row>
                </div>
            </div>


            <div id='contact-bg'>
                <form name="sentMessage text-light" className='container py-5' id="contactForm" novalidate="novalidate">
                    <div class="form-row d-flex">
                        <div class="control-group col-sm-6 p-2">
                            <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                                required="required" data-validation-required-message="Please enter your name" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group col-sm-6 p-2">
                            <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group p-2">
                        <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
                            required="required" data-validation-required-message="Please enter a subject" />
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group p-2">
                        <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                            required="required"
                            data-validation-required-message="Please enter your message"></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div className='p-2'>
                        <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                            Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Team;