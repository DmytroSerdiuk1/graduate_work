const ActiveMenu = () => {
    return {
        type: 'ACTIVE_MENU'
    }
}

const addToCart = (obj) => {
    return {
        type: 'ADD_TO_CART',
        payload: obj
    }
}
const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        productId: id
    }
}

const addToWishList = (id) => {
    return {
        type: 'TOGGLE_TO_WISHLIST',
        productId: id
    }
}

export {ActiveMenu, addToCart, addToWishList, removeFromCart}