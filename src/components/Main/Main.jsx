import React, { Component } from "react";
import {Container} from 'react-bootstrap'

import './Main.scss'
import Slide from './slide';

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

SwiperCore.use([Navigation]);

class Main extends Component {
  constructor(props) {
    super(props);
    this.navigationPrevRef  = React.createRef(null);
    this.navigationNextRef  = React.createRef(null);

    this.state = {
      slide: [
        {
          backgroundImageSlide: "http://interiorcom.ru/netcat_files/multifile/2633/spal_nya_02_1.jpg",
          title: "loft <br /> мебель",
          titleStyle: {},
          subtitle: "Современная и удобная мебель в Анапе",
          linkText: "СМОТРЕТЬ КАТАЛОГ",
          linkTo: "/catalog",
          white: true
        },
        {
          backgroundImageSlide: "https://egm.ru/assets/images/dsv/kitchen-set-royce-vanilla-soft-mdf.jpg",
          title: "loft <br /> мебель",
          titleStyle: {},
          subtitle: "Современная и удобная мебель в Анапе",
          linkText: "СМОТРЕТЬ КАТАЛОГ",
          linkTo: "/catalog",
          white: false
        }
      ]
    }
  }

  render() {
    return (
      <main className="promo">
        <Container>
          <div>
            <Swiper
              className="promo-slider"
              style={{height: 450}}
              spaceBetween={1}
              slidesPerView={1}
              navigation={{
                prevEl: this.navigationPrevRef.current,
                nextEl: this.navigationNextRef.current
              }}
              onSwiper={(swiper)=>{
                swiper.params.navigation.prevEl = this.navigationPrevRef.current
                swiper.params.navigation.nextEl = this.navigationNextRef.current
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              }}
            >
              {
                this.state.slide.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Slide 
                        backgroundImageSlide={item.backgroundImageSlide}
                        title={item.title}
                        subtitle={item.subtitle}
                        linkText={item.linkText}
                        linkTo={item.linkTo}
                        white={item.white}
                        />
                    </SwiperSlide>
                  )
                })
              }

              <div className="promo-arrows promo-button-prev" ref={this.navigationPrevRef}/>
              <div className="promo-arrows promo-button-next" ref={this.navigationNextRef}/>
            </Swiper>
          </div>
        </Container>
      </main>
    );
  }
}

export default Main;
