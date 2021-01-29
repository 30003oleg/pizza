export const addPizzaCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,

});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});

export const incCartItem = (id) => ({
    type: 'INC_CART_ITEM',
    payload: id,
});

export const decCartItem = (id) => ({
    type: 'DEC_CART_ITEM',
    payload: id,
});

