import React from "react";
import { Carousel, Row } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <div className="carouselContainer">
      <Row className="g-0">
        <div className="col-8">
          <Carousel fade indicators={false} controls={false} className="w-100">
            <Carousel.Item interval={3000}>
              <img
                className=" w-100"
                src="https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="First slide"
                style={{ height: "70vh", objectFit: "cover", width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" w-100"
                src="https://images.unsplash.com/photo-1630042461973-179ca2cfa7bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                alt="Second slide"
                style={{ height: "70vh", objectFit: "cover", width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" w-100"
                src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
                style={{ height: "70vh", objectFit: "cover", width: "100%" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-4">
          <Row className="g-0">
            <div className="col-12">
              <Carousel
                fade
                indicators={false}
                controls={false}
                className="w-100"
              >
                <Carousel.Item interval={2000}>
                  <img
                    className=" w-100"
                    src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="First slide"
                    style={{
                      height: "35vh",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=" w-100"
                    src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Second slide"
                    style={{
                      height: "35vh",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-12">
              <Carousel
                fade
                indicators={false}
                controls={false}
                className="w-100"
              >
                <Carousel.Item interval={3000}>
                  <img
                    className=" w-100"
                    src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="First slide"
                    style={{
                      height: "35vh",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className=" w-100"
                    src="https://images.unsplash.com/photo-1604586398467-32924c78b879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Second slide"
                    style={{
                      height: "35vh",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default CarouselComp;
