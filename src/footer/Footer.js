import React from 'react';
// import { NavLink } from 'react-bootstrap';
import '../footer/Footer.scss';

const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <div className='footer-top'>Looking Forward to Hearing From You!</div>
                <div className='footer-middle'>
                    <h1>Follow Us On</h1>
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <div><i class="fa-brands fa-facebook"></i></div>
                    <div><i class="fa-brands fa-instagram"></i></div>
                    <div><i class="fa-brands fa-linkedin"></i></div>
                    <div><i class="fa-brands fa-google"></i></div>
                    <div><i class="fa-brands fa-youtube"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;