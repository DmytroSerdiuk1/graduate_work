const ActiveMenu = () => {
    return {
        type: 'ACTIVE_MENU'
    }
}

const ExitMenu = () => {
    return {
        type: 'EXIT_MENU'
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
    console.log(id);
    return {
        type: 'TOGGLE_TO_WISHLIST',
        productId: id
    }
}

const removeFromWishList = (id) => {
    console.log(id);
    return {
        type: 'REMOVE_FROM_WISHLIST',
        productId: id
    }
}


const catalogLoad = (catalog) => {
    return {
        type: 'CATALOG_LOAD',
        catalog: catalog
    }
}

const catalogFetchError = () => ({type: "CATALOG_FETCH_ERROR"})

export {ActiveMenu, ExitMenu, addToCart, addToWishList, removeFromCart, catalogLoad, catalogFetchError, removeFromWishList}