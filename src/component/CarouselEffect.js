import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CarouselEffect = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <Carousel variant="dark" fade>
            <Carousel.Item interval={50000}>
              <img
                className="d-block w-100"
                src="../assets/img4.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>

                <button className="btn btn-outline-primary"> Explore</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100  "
                src="../assets/img2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn btn-outline-primary"> Explore</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../assets/img10.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <button className="btn btn-outline-primary "> Explore</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselEffect;
