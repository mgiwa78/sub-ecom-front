import React from "react";
import VendorItem from "../vendor-item/vendor-item.coponent";
import {} from "./vendor-section.styles";

import { VendorSectionContainer } from "./vendor-section.styles";
const VendorSection = () => {
  return (
    <VendorSectionContainer>
      <VendorItem />
      <VendorItem />
      <VendorItem />
      <VendorItem />
      <VendorItem />
    </VendorSectionContainer>
  );
};

export default VendorSection;
