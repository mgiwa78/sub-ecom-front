import { createSelector } from "reselect";

const cartState = (state) => state.cart;

export const SelectCartItems = createSelector(
  [cartState],
  (cartState) => cartState.cartItems
);
