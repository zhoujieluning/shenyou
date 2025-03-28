import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import hero1 from '../../images/slider/banner1.png'
import hero2 from '../../images/slider/banner2.png'
import hero3 from '../../images/slider/banner3.png'

const settings = {
  dots: false,
  arrows: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  fade: true,
}

const Hero = () => {
  return (
    <section style={{}}>
      <div className="hero-slider">
        <Slider {...settings}>
          <div className="slide">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                  <img src={hero1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                  <img src={hero2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Hero
