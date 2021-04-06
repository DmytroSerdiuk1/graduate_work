import React, { Component } from "react";
import "./Header.scss";

import Cursor from '../Cursor';

import Container from '../Container';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination, Scrollbar, A11y]);


class Header extends Component {
  render() {
    return <header className="header">
      <Cursor/>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        mousewheel
        direction="vertical"
      >
        <SwiperSlide>
          <div className="header-slider slide-1">
            <Container>
              <h1>
                Take your <br/> merch to the <br/> next level
              </h1>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-slider">

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-slider">

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-slider">

          </div>
        </SwiperSlide>
      </Swiper>
    </header>;
  }
}

export default Header;
