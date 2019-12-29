import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DetailsCarousel extends Component {
  render() {
    const images = this.props.imageList.map(function(data) {
      return (
        <div key={data.link}>
          <img src={data.link} alt="" />
        </div>
      );
    });
    return <Carousel>{images}</Carousel>;
  }
}

export default DetailsCarousel;
