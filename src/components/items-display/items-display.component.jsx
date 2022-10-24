import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProductsbyVendor } from "../../store/products/products.selector";

import { ItemMdContainer } from "../item-md/item-md.styles";
import ItemMd from "../item-md/item-md.component";
import { ItemsDisplayContainer } from "./items-display.styles";

const ItemsDisplay = () => {
  const ProductsByVendor = useSelector(selectAllProductsbyVendor);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (ProductsByVendor.length === 0) return;
    setProducts(ProductsByVendor);
  }, [ProductsByVendor]);
  console.log(ProductsByVendor);
  return (
    <ItemsDisplayContainer>
      {products.map((product) => (
        <ItemMd key={`${product.id}`} item={product} />
      ))}
    </ItemsDisplayContainer>
  );
};

export default ItemsDisplay;
