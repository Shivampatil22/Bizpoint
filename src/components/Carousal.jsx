import { useEffect } from "react";
import { useState } from "react";
import "../Carousal.css"
import img1 from "../assets/carousal_graphic.jpg"
import img2 from "../assets/carousal_responsive.jpg"
import img3 from "../assets/carousal_seo.jpg"
import img4 from "../assets/carousal_webDesign.jpg"
const Carousel=()=> {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const images=[img4,img3,img2,img1]
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image} alt="" />
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;