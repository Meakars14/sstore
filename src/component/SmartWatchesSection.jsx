import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  { id: 1, img: "images/product-item6.jpg", name: "Pink watch", price: "$870" },
  {
    id: 2,
    img: "images/product-item7.jpg",
    name: "Heavy watch",
    price: "$680",
  },
  {
    id: 3,
    img: "images/product-item8.jpg",
    name: "Spotted watch",
    price: "$750",
  },
  {
    id: 4,
    img: "images/product-item9.jpg",
    name: "Black watch",
    price: "$650",
  },
  {
    id: 5,
    img: "images/product-item10.jpg",
    name: "Black watch",
    price: "$750",
  },
];

const SmartWatchesSection = () => {
  return (
    <section
      id="smart-watches"
      className="product-store padding-large position-relative"
    >
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">
              Smart Watches
            </h2>
            <div className="btn-right">
              <a
                href="shop.html"
                className="btn btn-medium btn-normal text-uppercase"
              >
                Go to Shop
              </a>
            </div>
          </div>
          <Swiper
            className="product-watch-swiper"
            spaceBetween={30}
            slidesPerView={1}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img
                      src={product.img}
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
                    <span className="item-price text-primary">
                      {product.price}
                    </span>
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

export default SmartWatchesSection;
