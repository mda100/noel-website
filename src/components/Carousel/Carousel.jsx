import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

const ImgBlock = ({ image }) => {
  let isSafari = !(navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.indexOf("Safari") > -1);
  let block;
  if(image.isVideo && !isSafari){
    block = <video 
      max-width="100%"
      max-height="100%"
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className={styles.img}
      src={require(`../../assets/images/compressed/${image.image}`)}
      alt=""
      preload="auto"
     />

  } else {
    block = <img 
      className={styles.img}
      src={require(`../../assets/images/compressed/${image.image}`)}
      alt=""
    />
  }
  return block;
}

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    arrows: true,
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
            <div key={image.key} className={styles.inner_wrapper} >
              <ImgBlock image={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
