export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';


export const toggleCartHidden = () => {
  return ({
    type: TOGGLE_CART_HIDDEN
  })
};

export const addItem = (item) => {
  return ({
    type: ADD_ITEM,
    payload: item
  })
};

export const removeItem = (item) => {
  return ({
    type: REMOVE_ITEM,
    payload: item
  })
};

export const clearItemFromCart = (item) => {
  return ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  })
};

export const clearCart = () => {
  return ({
    type: CLEAR_CART
  });
};