import { AddBtn, ItemMdContainer } from "./item-md.styles";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartAction } from "../../store/cart/cart-actions";
import { SelectCartItems } from "../../store/cart/cart-selector";

const ItemMd = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(SelectCartItems);

  const handleAddToCart = (item) => {
    dispatch(AddToCartAction(item, cartItems));
  };
  return (
    <ItemMdContainer>
      <div className="showcase-banner">
        <img
          src={item.img}
          alt="Mens Winter Leathers Jackets"
          width="300"
          className="product-img default"
        />

        <p className="showcase-badge">15%</p>

        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>
      <a href="#" className="showcase-category">
        {item.name}
      </a>

      <h3>
        <a href="#" className="showcase-title">
          Pure Garment Dyed Cotton Shirt
        </a>
      </h3>

      <div className="showcase-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>

      <div className="price-box">
        <p className="price">₦{item.price}</p>
        {/* <del>₦5,656.00</del> */}
      </div>
      <AddBtn onClick={() => handleAddToCart(item, cartItems)}>Buy Now</AddBtn>
    </ItemMdContainer>
  );
};

export default ItemMd;
