import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import SectionTitle2 from '../SectionTitle2/SectionTitle2'
import Services from '../../api/service'

import simg from '../../../src/images/service/1.jpg'
import simg2 from '../../../src/images/service/2.jpg'
import simg3 from '../../../src/images/service/3.png'
import simg4 from '../../../src/images/service/4.png'
import simg5 from '../../../src/images/service/5.jpg'

const settings = {
  dots: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
}

const ClickHandler = () => {
  window.scrollTo(10, 0)
}

const ServiceSection = () => {
  return (
    <section
      id="ServiceSection"
      className="wpo-service-section section-padding"
      style={{ marginTop: '50px' }}
    >
      <div className="container">
        <SectionTitle2
          //   subTitle={"Our Services"}
          Title={'大宗商品交易论坛'}
        />
        <div
          className="row-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <img src={simg2} />
          <img src={simg5} />
          <img src={simg} />
          <img src={simg3} />
          <img src={simg4} />
          {/* <Slider {...settings}>
            {Services.map((service, srv) => (
              <div className="grid" key={srv}>
                <div className="wpo-service-item">
                  <div className="wpo-service-img">
                    <img src={service.sImg} alt="" />
                    <div className="wpo-service-text">
                      <h2>{service.sTitle}</h2>
                      <p>{service.description}</p>
                      <Link
                        onClick={ClickHandler}
                        to={`/service-single/${service.Id}`}
                      >
                        Details
                      </Link>
                    </div>
                    <div className="wpo-service-hidden-text">
                      <h2>{service.sTitle}</h2>
                      <p>{service.description}</p>
                      <Link
                        onClick={ClickHandler}
                        to={`/service-single/${service.Id}`}
                      >
                        Details
                      </Link>
                      <div className="top-shape">
                        <div className="shape-1"></div>
                        <div className="shape-2"></div>
                        <div className="shape-3"></div>
                      </div>
                      <div className="bottom-shape">
                        <div className="shape-1"></div>
                        <div className="shape-2"></div>
                        <div className="shape-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
