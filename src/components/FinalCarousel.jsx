import React from "react";
import CarouselComp from "./CarouselComp";
import CarouselText from "./CarouselText";

const FinalCarousel = () => {
  return (
    <div className="finalCarouselContainer">
      <CarouselComp />
      <div className="CarouselText">
        <CarouselText />
      </div>
    </div>
  );
};

export default FinalCarousel;
