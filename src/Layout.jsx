import React from "react";
import Blogs from "./Blogs";
import Products from "./Products";
import ImgCarousel from "./ImgCarousel";
import Type from "./Type";

const Layout = () => {
  return (
    <div>
      <ImgCarousel />
      <Products />
    </div>
  );
};

export default Layout;
