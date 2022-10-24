import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/home/home.component";
import SignInSignUp from "./routes/signin-signup/signin-signup.component";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";
import Cart from "./routes/Cart/Cart";

import jacketImg1 from "./assets/images/products/jacket-3.jpg";
import watchImg2 from "./assets/images/products/watch-1.jpg";
import shoeImg from "./assets/images/products/shoe-1.jpg";
import clothImg from "./assets/images/products/clothes-1.jpg";
import hatImg from "./assets/images/products/1.jpg";
import sportsImg from "./assets/images/products/sports-1.jpg";
import watch2Img from "./assets/images/products/watch-1.jpg";
import shapooImg from "./assets/images/products/shampoo.jpg";
import { setAllProductsByVendorData } from "./store/products/products.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAllProductsbyVendor } from "./store/products/products.selector";
import Landing from "./routes/landing/landing.component";

function App() {
  const ProductsByVendor = useSelector(selectAllProductsbyVendor);
  const diaptch = useDispatch();

  const products = [
    { id: 1, img: jacketImg1, name: "jacket", price: "2,811" },
    { id: 2, img: hatImg, name: "hat", price: "2,561" },
    { id: 3, img: shoeImg, name: "shoe", price: "3,811" },
    { id: 4, img: clothImg, name: "cloth", price: "4,8711" },
    { id: 5, img: watchImg2, name: "watch", price: "4,041" },
    { id: 6, img: sportsImg, name: "canvas", price: "8,771" },
    { id: 7, img: watch2Img, name: "watch", price: "9,011" },
    { id: 8, img: shapooImg, name: "shampoo", price: "2,811" },
  ];

  const handleSetProducts = () => {
    diaptch(setAllProductsByVendorData(products));
  };

  useEffect(() => {
    if (ProductsByVendor.length === 0) handleSetProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Home />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
