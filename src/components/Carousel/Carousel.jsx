import React, { useState, useMemo } from 'react';
import './Carousel.css';

const Carousel = ({ children, show }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < length - show ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : length - show
    );
  };

  const renderedSlides = useMemo(
    () =>
      children.map((child, index) => (
        <div key={index} className="carousel__slide">
          {child}
        </div>
      )),
    [children]
  );

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--left"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <div className="carousel__track-container">
        <div
          className="carousel__track"
          style={{
            transform: `translateX(-${currentIndex * (100 / show)}%)`,
          }}
        >
          {renderedSlides}
        </div>
      </div>
      <button
        className="carousel__button carousel__button--right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
