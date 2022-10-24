import React from "react";
import Header from "../../components/header/header.component";
import HeroSection from "../../components/hero-section/hero-section.coponent";
import { HeroBody } from "../../components/hero-section/hero-section.styles";
import HomeCatalogue from "../../components/home-catalogue/home-catalogue.coponent";
import Nav from "../../components/nav/nav.component";
import VendorSection from "../../components/vendor-section/vendor-section.coponent";
import { Container, HomeContainer } from "./home.styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Nav />
        <HeroSection />
        <VendorSection />
        <HomeCatalogue />
      </Container>
    </>
  );
};

export default Home;
