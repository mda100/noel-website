import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

const ImgBlock = ({ image }) => {
  let block;
  if(image.isVideo){
    block = <video 
      width="100%"
      autoplay="autoplay"
      loop="true"
      muted="true"
      playsinline="true"
      className={styles.img}
      src={require(`../../assets/images/${image.image}`)}
      alt=""
      preload="auto"
     />

  } else {
    block = <img 
      key={image.key}
      className={styles.img}
      src={require(`../../assets/images/${image.image}`)}
      alt=""
    />
  }
  return block;
}

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
          return (
            <div className={styles.inner_wrapper}>
              <ImgBlock image={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
