import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
