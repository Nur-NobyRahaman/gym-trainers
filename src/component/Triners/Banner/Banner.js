import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Trainer/banners/banner1.jpg'
import banner2 from '../../../images/Trainer/banners/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>TRAINERS</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        src={banner2}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h1>TRAINERS</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>
    );
};

export default Banner;