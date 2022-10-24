import React from "react";
import CategoryMenu from "../category-menu/category-menu.component";
import ItemsDisplay from "../items-display/items-display.component";
import { HomeCatalogueContainer } from "./home-catalogue.styles";

const HomeCatalogue = () => {
  return (
    <HomeCatalogueContainer>
      <CategoryMenu />
      <ItemsDisplay />
    </HomeCatalogueContainer>
  );
};

export default HomeCatalogue;
