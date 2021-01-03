import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <CartItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;