import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { SelectCartItems } from "../../store/cart/cart-selector";
import {
  AddToCartAction,
  removeFromCartAction,
} from "../../store/cart/cart-actions";
import { selectAllProductsbyVendor } from "../../store/products/products.selector";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(SelectCartItems);
  // Stpe: 7   calucate total of items
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * parseInt(item.price),
    0
  );
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (item) => {
    dispatch(AddToCartAction(item, cartProducts));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCartAction(item, cartProducts));
  };
  useEffect(() => {
    if (cartItems.length === 0) return;
    setCartProducts(cartItems);
  }, [cartItems]);

  // prodcut qty total
  return (
    <>
      <section className="cart-items">
        {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

        <div className="cart-details">
          {cartItems.length === 0 && (
            <h1 className="no-items product">No Items are add in Cart</h1>
          )}
          <div className="cartList">
            {cartItems.map((item) => {
              console.log(item);
              const productQty = parseInt(item.price) * item.quantity;

              return (
                <div className="cart-list product " key={item.id}>
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="cart-details">
                    <h3 className="cart-title">{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.quantity}
                      <span> ₦{productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => handleAddToCart(item, cartItems)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => handleRemoveFromCart(item, cartItems)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cart-total product">
          <h2>Cart Summary</h2>
          <div className=" d_flex">
            <h4>Total Price :</h4>
            <h3> ₦{totalPrice}.00</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
