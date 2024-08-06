import React, { useState, useEffect, useCallback } from "react";
import "./Landing.css";

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: "https://blog.askokey.com/wp-content/uploads/2024/06/DSC02505-scaled.jpg",
      text: "Welcome to the Future of style. where we meet you requierments",
      button: "Sign up",
    },
    {
      img: "https://blog.askokey.com/wp-content/uploads/2024/06/WIL04335-scaled.jpg",
      text: "Embrace the Power of style",
      button: "Explore",
    },
    {
      img: "https://blog.askokey.com/wp-content/uploads/2023/08/Pro-Capture-One-3175-1-1.jpg",
      text: "Master style with Ease",
      button: "More info",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img src={slide.img} alt={slide.text} />
              {slide.button && (
                <button className="info-button">{slide.button}</button>
              )}
              <div className="carousel-text">
                <h1>{slide.text}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-control prev"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <button
            className="carousel-control next"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
