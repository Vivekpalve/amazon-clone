import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="" />

      <button className="add_to_cart">Add to Card</button>
    </div>
  );
};

export default Product;
