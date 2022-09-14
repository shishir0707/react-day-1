import React from 'react';
import Slider from "react-slick";
import './Carousel.scss';

import img1 from '../../services/img/02.jpg'
import img2 from '../../services/img/03.jpg'
import img3 from '../../services/img/10.jpg'

const HeaderBottom = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='mt-2'>
            <div>
                <Slider {...settings}>
                    <div>
                       <img src={img1} alt="" />
                    </div>
                    <div>
                    <img src={img2} alt="" />
                    </div>
                    <div>
                    <img src={img3} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}


export default HeaderBottom;