import React from "react";
import "../Components/Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKa7jAD9s505Z568FXxuqbavZaVTWQXlyJy_Rgfpn4Ox9t047Hi3uIK0oIfg7eHq0vw&usqp=CAU"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};


export default Checkout;