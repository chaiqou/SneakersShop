import React from "react";
import CustomButton from "../customButton/CustomButton";
import CartItem from "../cart-item/CartItem";
import {withRouter} from 'react-router-dom'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import "./CartDropdown.styles.scss";
import { connect } from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.actions'


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}
    >
       CHECKOUT
    </CustomButton>
  </div>
);



const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(withRouter(CartDropdown));