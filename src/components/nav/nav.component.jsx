import React from "react";
import { useNavigate } from "react-router";
import { Navcontainer, NavItems } from "./nav.styles";

const Nav = () => {
  const Navigate = useNavigate();
  return (
    <Navcontainer className="desktop-menu-category-NavItemsst">
      <NavItems onClick={() => Navigate("/")} className="menu-category">
        <a href="#" className="menu-title">
          Home
        </a>
      </NavItems>
      <NavItems className="menu-category">
        <a href="#" className="menu-title">
          CATEGORIES
        </a>
      </NavItems>
      <NavItems className="menu-category">
        <a href="#" className="menu-title">
          Men's
        </a>
      </NavItems>
      <NavItems className="menu-category">
        <a href="#" className="menu-title">
          women's
        </a>
      </NavItems>
      <NavItems className="menu-category">
        <a href="#" className="menu-title">
          jwelry
        </a>
      </NavItems>
      <NavItems className="menu-category">
        <a href="#" className="menu-title">
          perfume
        </a>
      </NavItems>
    </Navcontainer>
  );
};

export default Nav;
