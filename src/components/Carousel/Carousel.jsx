import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

/* documentation for setting props */

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoading: 'progress',
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <div className={styles.outer_wrapper}>
      <Slider {...settings}>
        {images?.map((image, i) => {
          console.log(image.image)
          return (
            <div key={i} className={styles.inner_wrappers}>
              <img className={styles.img} src={require(`../../assets/${image.image}`)} alt=""/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
