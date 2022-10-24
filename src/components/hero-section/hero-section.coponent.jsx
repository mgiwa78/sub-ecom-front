import React from "react";
import {
  Container,
  HeroBody,
  HeroDescription,
  HeroSlide,
  HeroSlideContainer,
  HeroText,
  HeroTitle,
  Slide,
} from "./hero-section.styles";
import heroImg1 from "../../assets/images/banner-1.jpg";
import heroImg2 from "../../assets/images/banner-2.jpg";
import heroImg3 from "../../assets/images/banner-3.jpg";

const HeroSection = () => {
  return (
    <HeroSlideContainer>
      <HeroSlide bgimg={heroImg1}>
        <HeroBody>
          <HeroTitle>Trending Item</HeroTitle>
          <HeroText>WOMEN'S LATEST FASHION SALE</HeroText>
        </HeroBody>
        <HeroDescription>starting at $ 20.00</HeroDescription>{" "}
        <button className="btn">Shop now</button>
      </HeroSlide>
    </HeroSlideContainer>
  );
};

export default HeroSection;
