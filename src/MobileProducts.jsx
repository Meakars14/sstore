import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // Correct import path for modules

const products = [
  { id: 1, name: "Iphone 10", price: 980, image: "images/product-item1.jpg" },
  { id: 2, name: "Iphone 11", price: 1100, image: "images/product-item2.jpg" },
  { id: 3, name: "Iphone 8", price: 780, image: "images/product-item3.jpg" },
  { id: 4, name: "Iphone 13", price: 1500, image: "images/product-item4.jpg" },
  { id: 5, name: "Iphone 12", price: 1300, image: "images/product-item5.jpg" },
];

const MobileProducts = () => {
  return (
    <section
      id="mobile-products"
      className="product-store position-relative padding-large no-padding-top"
    >
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">
                Go to Shop
              </a>
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="product-swiper"
            spaceBetween={30}
            slidesPerView={1}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">
                        Add to Cart
                        <svg className="cart-outline">
                          <use xlinkHref="#cart-outline"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">{product.name}</a>
                    </h3>
                    <span className="item-price text-primary">${product.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
  );
};

export default MobileProducts;
