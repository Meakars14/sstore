import React from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import "swiper/css";
import "swiper/css/navigation";
import CompanyServices from "./component/CompanyServices";
import MobileProducts from "./MobileProducts";
import SmartWatchesSection from "./component/SmartWatchesSection";
import YearlySale from "./component/YearlySale";
import LatestBlog from "./component/LatestBlog";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CompanyServices />
      <MobileProducts />
      <SmartWatchesSection />
      <YearlySale />
      <LatestBlog />
    </div>
  );
}
