import { PRODUCTS_ACTION_TYPES } from "./products.types";

export const setAllProductsByVendorData = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS_BY_VENDOR_DATA,
    payload: products,
  };
};
