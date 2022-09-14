import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBtn from '../../components/ui-components/Button/MainBtn';
import blog1 from '../../services/img/blog-1.jpg';
import blog2 from '../../services/img/blog-2.jpg';
import blog3 from '../../services/img/blog-3.jpg';
import Test from '../Test';

const Blog = () => {
    const clickHandler = (e) => {
        console.log(e);
    }

    const secondHan = e => {
        console.log(e);
    }
    return (
        <div id='blog' className=''>
            <div className='container'>
                <div className='text-center p-4'>
                    <h1 className='text-center mt-2'>LATEST BLOG</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <Row>
                    <Col sm={4} className='p-3'>
                        <img width="100%" src={blog1} alt="blog-img" />
                        <h5 className='py-4'>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                        <MainBtn btnText="Hover Me" clickHandler={secondHan} />
                    </Col>
                    <Col sm={4} className='p-3'>
                        <img width="100%" src={blog2} alt="blog-img2" />
                        <h5 className='py-4'>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                        <MainBtn  className="text-danger" btnText="Click Me" clickHandler={clickHandler} />
                    </Col>
                    <Col sm={4} className='p-3'>
                        <img width="100%" src={blog3} alt="blog-img3" />
                        <h5 className='py-4'>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                        <button><a link="/">Read More..</a></button>
                    </Col>
                </Row>
            </div>
            <Test />
        </div>
    );
};

export default Blog;