import React, { useEffect } from "react";
import Header from "../../components/header/header.component";
import HeroSection from "../../components/hero-section/hero-section.coponent";
import { HeroBody } from "../../components/hero-section/hero-section.styles";
import HomeCatalogue from "../../components/home-catalogue/home-catalogue.coponent";
import Nav from "../../components/nav/nav.component";
import VendorSection from "../../components/vendor-section/vendor-section.coponent";
import { setAllProductsByVendorData } from "../../store/products/products.action";
import { Container, HomeContainer } from "./home.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProductsbyVendor } from "../../store/products/products.selector";
import { Outlet } from "react-router";

const Home = () => {
  const ProductsByVendor = useSelector(selectAllProductsbyVendor);
  const diaptch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <Nav />
        <Outlet></Outlet>
      </Container>
    </>
  );
};

export default Home;
