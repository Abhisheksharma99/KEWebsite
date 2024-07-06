import React from "react";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import Type from "./Type";
const ImgCarousel = () => {
    const productImages = [image1, image2, image3, image4, image5];
    const industryNames = ["Chemicals for General Industries","Chemicals for Pulp and Paper Industries","Chemicals for textile Industries","Chemicals for Sugar Mills","Chemicals for Distillery"]
  return (
    <div>
      <div className="carousel-container text-center mt-5">
        <Carousel
          infiniteLoop
          showArrows
          showIndicators
          autoPlay
          useKeyboardArrows
          dynamicHeight
        >
          {productImages.map(item => (<div>
            <img src={item} alt="" />
            <p className="legend captionclr fw-bolder fs-6">
              {industryNames[productImages.indexOf(item)]}
            </p>
          </div>))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImgCarousel;
