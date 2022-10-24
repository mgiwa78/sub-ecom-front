import { CART_ACTION_TYPES } from "./cart-action-types";

const addToCart = (productToAdd, prevCartItems) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => productToAdd.id === cartItem.id
  );

  if (existingCartItem) {
    return prevCartItems.map((cartitem) =>
      cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  return [{ ...productToAdd, quantity: 1 }, ...prevCartItems];
};

// Stpe: 6
const decreaseQty = (cartItemToRemove, prevCartItems) => {
  const itemToRemove = prevCartItems.find(
    (cartItem) => cartItemToRemove.id === cartItem.id
  );

  if (itemToRemove.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
  }
  return prevCartItems.map((cartitem) =>
    cartitem.id === cartItemToRemove.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem
  );
};

export const AddToCartAction = (productToAdd, prevCartItems) => {
  const newItems = addToCart(productToAdd, prevCartItems);

  return {
    type: CART_ACTION_TYPES.SET_CART_ACTION,
    payload: newItems,
  };
};
export const removeFromCartAction = (cartItemToRemove, prevCartItems) => {
  const newItems = decreaseQty(cartItemToRemove, prevCartItems);

  return {
    type: CART_ACTION_TYPES.SET_CART_ACTION,
    payload: newItems,
  };
};
