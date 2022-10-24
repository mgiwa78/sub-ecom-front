import React from "react";
import { ItemMdContainer } from "../item-md/item-md.styles";
import ItemMd from "../item-md/item-md.component";
import { ItemsDisplayContainer } from "./items-display.styles";

const ItemsDisplay = () => {
  return (
    <ItemsDisplayContainer>
      <ItemMd num={1} />
      <ItemMd num={2} />
      <ItemMd num={3} />
      <ItemMd num={4} />
      <ItemMd num={5} />
      <ItemMd num={6} />
      <ItemMd num={7} />
      <ItemMd num={8} />
    </ItemsDisplayContainer>
  );
};

export default ItemsDisplay;
