import React from "react";
import {
  VendorImage,
  VendorItemContainer,
  VendorLink,
  VendorName,
  VendorDetails,
  VendorIcon,
  VendorContent,
  VendorAmount,
} from "./vendor-item.styles";

import vendor from "../../assets/images/icons/jacket.svg";
const VendorItem = () => {
  return (
    <VendorItemContainer>
      <VendorIcon />

      <VendorDetails>
        <VendorContent>
          <VendorName>Dress & frock</VendorName>

          <VendorAmount>(53)</VendorAmount>
        </VendorContent>

        <VendorLink>Show all</VendorLink>
      </VendorDetails>
    </VendorItemContainer>
  );
};

export default VendorItem;
