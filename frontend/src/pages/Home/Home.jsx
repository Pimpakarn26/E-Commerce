import React from "react";
import Banner from "./Banner";
import Categories from "./Category";
import Product from "./Product";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Product />
      <Testimonials />
      <Service />
    </div>
  );
};

export default Home;