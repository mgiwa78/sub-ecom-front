import React, { useEffect } from "react";
import HeroSection from "../../components/hero-section/hero-section.coponent";
import HomeCatalogue from "../../components/home-catalogue/home-catalogue.coponent";
import VendorSection from "../../components/vendor-section/vendor-section.coponent";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <VendorSection />
      <HomeCatalogue />
    </>
  );
};

export default Landing;
