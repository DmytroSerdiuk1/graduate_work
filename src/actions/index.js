const ActiveMenu = () => {
    return {
        type: 'ACTIVE_MENU'
    }
}

const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        productId: id
    }
}

const addToWishList = (id) => {
    return {
        type: 'TOGGLE_TO_WISHLIST',
        productId: id
    }
}

export {ActiveMenu, addToCart, addToWishList}