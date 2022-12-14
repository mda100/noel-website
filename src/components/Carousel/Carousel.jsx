import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoading: 'progressive',
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: false,
    className: styles.inner_slider
  };
  return (
    <div className={styles.outer_wrapper}>
      <Slider {...settings}>
        {images?.map((image) => {
          console.log(image.image)
          return (
            <div className={styles.inner_wrapper}>
              <img key={image.key} className={styles.img} src={require(`../../assets/images/${image.image}`)} alt=""/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
