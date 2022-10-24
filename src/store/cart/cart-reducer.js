import { CART_ACTION_TYPES } from "./cart-action-types";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ACTION:
      return { ...state, cartItems: payload };

    default:
      return state;
  }
};

export default cartReducer;
