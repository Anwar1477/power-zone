import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import banner1 from '../../../Images/Banner/banner (2).jpg'
import banner2 from "../../../Images/Banner/banner (2).jpg";
import banner3 from "../../../Images/Banner/banner (3).jpg";
import Services from '../../HomePage/Services/Services'

const Home = () => {
  return (
    <div className="container">
      <Carousel>
      <Carousel.Item>
        <img className="banner1 d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>
            Your Fully fledged fitness studio ready to help you reach your Goal
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>
            Your Fully fledged fitness studio ready to help you reach your Goal
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>
            Your Fully fledged fitness studio ready to help you reach your Goal
          </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Services></Services>
    </div>
  );
};

export default Home;
