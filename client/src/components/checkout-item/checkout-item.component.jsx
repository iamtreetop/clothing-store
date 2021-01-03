import React from 'react';
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer className='name'>{name}</TextContainer>
      <QuantityContainer>
        {/* <div className='arrow'>&#10134;</div> */}
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        {/* <div className='arrow'>&#x2795;</div> */}
      </QuantityContainer>
      <TextContainer className='price'>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDTP = (dispatch) => {
  return ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  })
};

export default connect(
  null, 
  mapDTP
)(CheckoutItem);