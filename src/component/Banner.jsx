import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'; // Import the Navigation module
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles


export default function Banner() {
  return (
    <div>
      <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
      <Swiper
        className="main-swiper"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-arrow-next',
          prevEl: '.swiper-arrow-prev',
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                  <a
                    href="shop.html"
                    className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                  >
                    Shop Product
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="image-holder">
                  <img src="images/banner-image.png" alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1 className="display-2 text-uppercase text-dark pb-5">
                    Technology Hack You Won't Get
                  </h1>
                  <a
                    href="shop.html"
                    className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                  >
                    Shop Product
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="image-holder">
                  <img src="images/banner-image.png" alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-icon swiper-arrow swiper-arrow-prev">
        <svg className="chevron-left">
          <use xlinkHref="#chevron-left" />
        </svg>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-next">
        <svg className="chevron-right">
          <use xlinkHref="#chevron-right" />
        </svg>
      </div>
    </section>
    </div>
  )
}
