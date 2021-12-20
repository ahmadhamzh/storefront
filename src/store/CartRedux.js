let initialState = {
    cartItems: [],
    cartItemsSum: 0
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'add':
            state.cartItems.push(payload)
            return { ...state, cartItemsSum: state.cartItemsSum + payload.price }

        case 'delete':
            const remainingItems = state.cartItems.filter(item => item.name !== payload )
            return { ...state, cartItems: remainingItems }

        default:
            return state;
    }
};

export const addToCart = (obj) => {
    return {
        type: 'add',
        payload: obj
    };
};

export const deleteFromCart = (name) => {
    return {
        type: 'delete',
        payload: name
    };
};