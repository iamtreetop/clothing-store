import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartContainer>
  );
};

const mapDTP = (dispatch) => {
  return ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
};

const mapSTP = createStructuredSelector({
  itemCount: selectCartItemsCount
});

// const mapSTP = (state) => {
//     return ({
//         itemCount: selectCartItemsCount(state)
//     })
// }

export default connect(
  mapSTP, 
  mapDTP
)(CartIcon);