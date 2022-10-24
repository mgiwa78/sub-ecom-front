import React from "react";
import { ItemMdContainer } from "./item-md.styles";

import jacketImg1 from "../../assets/images/products/jacket-3.jpg";
import watchImg2 from "../../assets/images/products/watch-1.jpg";
import shoeImg from "../../assets/images/products/shoe-1.jpg";
import clothImg from "../../assets/images/products/clothes-1.jpg";
import hatImg from "../../assets/images/products/1.jpg";
import sportsImg from "../../assets/images/products/sports-1.jpg";
import watch2Img from "../../assets/images/products/watch-1.jpg";
import shapooImg from "../../assets/images/products/shampoo.jpg";

const ItemMd = ({ num }) => {
  const itemImages = {
    1: jacketImg1,
    2: hatImg,
    3: shoeImg,
    4: clothImg,
    5: watchImg2,
    6: sportsImg,
    7: watch2Img,
    8: shapooImg,
  };
  return (
    <ItemMdContainer>
      <div className="showcase-banner">
        <img
          src={itemImages[num]}
          alt="Mens Winter Leathers Jackets"
          width="300"
          className="product-img default"
        />

        <p className="showcase-badge">15%</p>

        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>
      <a href="#" className="showcase-category">
        shirt
      </a>

      <h3>
        <a href="#" className="showcase-title">
          Pure Garment Dyed Cotton Shirt
        </a>
      </h3>

      <div className="showcase-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>

      <div className="price-box">
        <p className="price">₦2,145.00</p>
        <del>₦5,656.00</del>
      </div>
    </ItemMdContainer>
  );
};

export default ItemMd;
