import React from "react";
import {
  ActionsContianer,
  CartContainer,
  CartIcon,
  HeaderActions,
  Headercontainer,
  HeaderLogo,
  HeaderSearch,
  UserIcon,
} from "./header.styles";

import LogoUrl from "../../assets/images/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const Navigate = useNavigate();
  return (
    <Headercontainer>
      <div className="container">
        <HeaderLogo
          onClick={() => Navigate("/")}
          href="#"
          className="header-logo"
        >
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

        <HeaderActions>
          <ActionsContianer className="user">
            <UserIcon />
          </ActionsContianer>
          <ActionsContianer>
            <CartContainer>
              <Link to="/cart">
                <CartIcon />
                <span className="cart-num">
                  {[1, 2, 3].length === 0 ? "" : [1, 2, 3].length}
                </span>
              </Link>
            </CartContainer>
          </ActionsContianer>
        </HeaderActions>
      </div>
    </Headercontainer>
  );
};

export default Header;
