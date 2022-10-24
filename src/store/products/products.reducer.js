import { PRODUCTS_ACTION_TYPES } from "./products.types";
const INITIAL_STATE = {
  allProductsByVendor: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS_BY_VENDOR_DATA:
      return { ...state, allProductsByVendor: payload };

    default:
      return state;
  }
};
