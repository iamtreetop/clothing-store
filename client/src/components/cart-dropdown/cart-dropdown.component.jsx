import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  )
};

const mapSTP = createStructuredSelector ({
  cartItems: selectCartItems 
});

// const mapSTP = (state) => {
//   return ({
//     cartItems: selectCartItems(state)   
//   })
// }

export default withRouter(connect(mapSTP)(CartDropdown));