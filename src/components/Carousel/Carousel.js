import React, { useState } from "react";
import { SliderData } from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const bannerMessage = () => {
    if (current === 0)
      return (
        <h2 className="slider-banner">
          <a href="#">
            <span className="slider-span">
              Specificațiile tehnice privind aplicarea RO e-TRANSPORT
            </span>
          </a>
        </h2>
      );
    if (current === 1)
      return (
        <h2 className="slider-banner">
          <a href="#">
            <span className="slider-span">
              Calendarul fiscal pentru luna Iulie
            </span>
          </a>
        </h2>
      );
    if (current === 2)
      return (
        <h2 className="slider-banner">
          <a href="#">
            <span className="slider-span">
              Lista seminariilor web pentru luna Iunie
            </span>
          </a>
        </h2>
      );
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <h2 className="slider-banner">{bannerMessage()}</h2>
            {index === current && (
              <img
                src={slide.image}
                alt="lorry image"
                width="1200px"
                height="760px"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
