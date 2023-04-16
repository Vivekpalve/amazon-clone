import React from "react";
import "../Components/Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345"
            title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses"
            price={29.99}
            image={
              "https://m.media-amazon.com/images/I/41TjLWvZpkL._SX290_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            id="6123455"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={249.99}
            image={
              "https://m.media-amazon.com/images/I/718Bxs69wUL._SX679_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Echo Dot 4th GenSmart speaker with Alexa"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61JhG2HKMCL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 1TB) - Space Grey (6th Generation)"
            price={399.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81hAx31maUL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Samsung Galaxy Watch5 LTE"
            price={149.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61aVQDazNHL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="32554345"
            title="Samsung LC32G75TQSWXXL, Black Odyssey G7 GamingCurved Monitor"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51+iB9+5HKL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
