import { Button, Carousel } from "react-bootstrap";

const CarouselText = () => {
  return (
    <div className="carouselTextContainer">
      <Carousel fade indicators={false} controls={false} className="w-100">
        <Carousel.Item interval={3000}>
          <h1>Purana Phone Becho Aur Cash Pao</h1>
          <br />
          <h5>Free Pickup | Instant Payment</h5>
          <br />
          <a href="mailto:sell@vsnsellsolutions.com" variant="dark">
            <Button variant="outline-light">Check Price</Button>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <h1>Sell your old Phone at Best Price</h1>
          <br />
          <h5>Free Pickup | Instant Payment</h5>
          <br />
          <a href="mailto:sell@vsnsellsolutions.com" variant="dark">
            <Button variant="outline-light">Check Price</Button>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <h1>Spread the Word and Earn !</h1>
          <br />
          <h5>Refer your Friend to Casify and Earn 100</h5>
          <br />
          <a href="mailto:sell@vsnsellsolutions.com" variant="dark">
            <Button variant="outline-light">Check Price</Button>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <h1>Looking for your next phone</h1>
          <br />
          <h5>Click Here</h5>
          <br />
          <a href="mailto:sell@vsnsellsolutions.com" variant="dark">
            <Button variant="outline-light">Check Price</Button>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselText;
