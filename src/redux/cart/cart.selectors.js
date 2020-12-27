import { createSelector } from 'reselect';

// input selector  - function that takes whole state and returns slice of state, 
// one layer deep
const selectCart = (state) => state.cart;  

// memoized
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQty, cartItem) => 
            accumulatedQty + cartItem.quantity * cartItem.price, 
            0
        )
)