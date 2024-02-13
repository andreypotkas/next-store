"use client";

import { useState } from "react";
import styles from "./index.module.scss";

const images = ["/promo/promo1.jpg", "/promo/promo2.jpg", "/promo/promo3.jpg"];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <button className={styles.prev} onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={goToNextSlide}>
        &#10095;
      </button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span key={index} className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
