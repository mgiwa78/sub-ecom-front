import React from "react";
import { Headercontainer, HeaderLogo, HeaderSearch } from "./header.styles";

import LogoUrl from "../../assets/images/logo/logo.svg";
const TopBar = () => {
  return (
    <Headercontainer>
      <div className="container">
        <HeaderLogo href="#" className="header-logo">
          <img src={LogoUrl} alt="Anon's logo" width="120" height="36" />
        </HeaderLogo>

        <HeaderSearch>
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />

          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </HeaderSearch>

        <div className="header-user-actions">
          <button className="action-btn">
            <ion-icon name="person-outline"></ion-icon>
          </button>

          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">0</span>
          </button>

          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">0</span>
          </button>
        </div>
      </div>
    </Headercontainer>
  );
};

export default TopBar;
