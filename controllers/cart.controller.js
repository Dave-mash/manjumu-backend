const cart = [{
    sessionId: 1,
    productId: 2,
    quantity: 3,
    userId: 'dafd3413407fgs'
}, {
    sessionId: 1,
    productId: 3,
    quantity: 3,
    userId: 'dafd3413407fgs'
}, {
    sessionId: 1,
    productId: 4,
    quantity: 3,
    userId: 'dafd3413407fgs'
}, {
    sessionId: 1,
    productId: 5,
    quantity: 3,
    userId: 'dafd3413407fgs'
}]

// Fetch cart items
export const fetchCart = async (req, res) => {
    if (!cart.length) return { error: 'Expected an array but got something else!' };

    try {
        return cart;
    } catch (error) {
        return {
            error: error.message,
            status: 500
        };
    }
};

// update cart item
export const updateCartItem = async (req, res, pid, update) => {
    try {
        const cartItem = cart.filter(item => item.productId === pid);

        if (!Object.keys(cart.length)) return { error: 'Expected an object but got something else!' };

        return cartItem;
    } catch (error) {
        return {
            error: error.message,
            status: 500
        };
    }
}