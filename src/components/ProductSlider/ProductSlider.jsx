import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import './ProductSlider.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

SwiperCore.use([Navigation, Thumbs]);


const ProductSlider = ({data}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const centredNavigation = () => {
    if (data.length < 5) {
      return true
    }

    return false
  }

  return (
    <div className="product-slider">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }} 
      >
        {
          data.map((i, key) => {
            return (
              <SwiperSlide
              className="d-flex product-slide justify-content-center"
              key={key}>
                <img src={i} alt="key" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Swiper
        className="slider-nav"
        spaceBetween={10} 
        slidesPerView={5}
        grabCursor={true}
        centeredSlides={centredNavigation()}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        allowTouchMove={false}
        style={{width: "100%"}}
        onSwiper={(swiper)=>{
          setThumbsSwiper(swiper)
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        {
          data.map((i, key) => {
            return (
              <SwiperSlide
              className="d-flex justify-content-center"
              key={key}>
                <img src={i} alt="key" />
              </SwiperSlide>
            )
          })
        }
          <div className="product-arrows product-button-prev" ref={navigationPrevRef}><ArrowBackIosIcon/></div>
          <div className="product-arrows product-button-next" ref={navigationNextRef}><ArrowForwardIosIcon/></div>
      </Swiper>
    </div>
  )
}

export default ProductSlider
