import React from "react";
import "../Components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ShoppingBasket } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"
        alt="Amzone_logo"
      />
      <div className="header__nav">
        {/* <div className="header__locationIcon">
          <LocationOnOutlinedIcon />
        </div> */}
        <div className="header__option">
          <span className="header__optionLineOne">Hello </span>
          <div className="header__locationIcon">
          <LocationOnOutlinedIcon />
        
          <span className="header__optionLineTwo">Select Your Address</span>
          </div>
        </div>
      </div>
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Amazon.in"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return </span>
          <span className="header__optionLineTwo">& Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
